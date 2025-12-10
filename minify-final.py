#!/usr/bin/env python3
import re

def minify_js(content):
    # Remove single line comments
    content = re.sub(r'//.*?(?=\n|$)', '', content)
    # Remove multi-line comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Remove newlines and extra spaces
    content = re.sub(r'\s+', ' ', content)
    # Remove spaces around special characters
    content = re.sub(r'\s*([{}:;,=()[\]])\s*', r'\1', content)
    return content.strip()

file_path = r'c:\Users\l5r\Desktop\Project\Sczi7-WEB\src\assets\js\language.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

minified = minify_js(content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(minified)

print("Language.js minified")
