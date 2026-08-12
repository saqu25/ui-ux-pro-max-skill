#!/usr/bin/env python3
"""Inlines vendor/ and assets/ into a single self-contained index.html.

The multi-file layout (vendor/*.js, assets/fonts/*.woff2, assets/flags/*.svg,
assets/globe-dots.js) is the editable source. Run this after changing any of
those so the page keeps working when shared or opened as a lone file --
external script/font/image references silently fail if index.html is moved
or copied without its folders, which is exactly what breaks the globe.

Usage: python3 build.py
"""
import base64
import re
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "index.src.html"
OUT = ROOT / "index.html"

FLAG_ISOS = ["bg", "ro", "pl", "de", "gb", "ie", "in", "ge", "uz", "tj"]


def read_text(path):
    return path.read_text(encoding="utf-8")


def b64(path):
    return base64.b64encode(path.read_bytes()).decode("ascii")


def main():
    html = read_text(SRC)

    # Fonts: url('assets/fonts/NAME.woff2') -> data URI.
    def font_sub(m):
        name = m.group(1)
        data = b64(ROOT / "assets" / "fonts" / f"{name}.woff2")
        return f"url('data:font/woff2;base64,{data}')"

    html = re.sub(r"url\('assets/fonts/([a-z0-9\-]+)\.woff2'\)", font_sub, html)

    # Vendored JS libraries: <script src="vendor/X.min.js"></script> -> inline.
    for name in ["gsap.min.js", "ScrollTrigger.min.js", "three.min.js"]:
        marker = f'<script src="vendor/{name}"></script>'
        assert marker in html, f"missing marker for {name}"
        code = read_text(ROOT / "vendor" / name)
        html = html.replace(marker, f"<script>\n{code}\n</script>")

    # Globe dot-matrix data: <script src="assets/globe-dots.js"></script> -> inline.
    marker = '<script src="assets/globe-dots.js"></script>'
    assert marker in html, "missing marker for globe-dots.js"
    code = read_text(ROOT / "assets" / "globe-dots.js")
    html = html.replace(marker, f"<script>\n{code}\n</script>")

    # Flags: build an ISO -> data URI lookup and use it wherever the page
    # built an "assets/flags/<iso>.svg" path at runtime.
    flag_entries = []
    for iso in FLAG_ISOS:
        data = b64(ROOT / "assets" / "flags" / f"{iso}.svg")
        flag_entries.append(f'"{iso}":"data:image/svg+xml;base64,{data}"')
    flag_map_js = "var FLAG_DATA_URIS = {" + ",".join(flag_entries) + "};\n  "

    html = html.replace(
        '  /* ---------------- Shared country data',
        f'  {flag_map_js}/* ---------------- Shared country data',
    )
    html = html.replace(
        'src="assets/flags/\' + c.iso + \'.svg"',
        'src="\' + FLAG_DATA_URIS[c.iso] + \'"',
    )

    OUT.write_text(html, encoding="utf-8")
    print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
