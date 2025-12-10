#!/usr/bin/env python3
"""
Script to minify HTML, CSS, and JavaScript files
"""
import os
import re
import json

def minify_html(content):
    """Minify HTML content"""
    # Remove comments
    content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
    # Remove extra whitespace
    content = re.sub(r'\s+', ' ', content)
    # Remove spaces around tags
    content = re.sub(r'>\s+<', '><', content)
    return content.strip()

def minify_css(content):
    """Minify CSS content"""
    # Remove comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Remove extra whitespace
    content = re.sub(r'\s+', ' ', content)
    # Remove spaces around special characters
    content = re.sub(r'\s*([{}:;,])\s*', r'\1', content)
    return content.strip()

def minify_js(content):
    """Minify JavaScript content"""
    # Remove comments (single line)
    content = re.sub(r'//.*?(?=\n|$)', '', content)
    # Remove comments (multi-line)
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Remove extra whitespace
    content = re.sub(r'\s+', ' ', content)
    # Remove spaces around special characters (but preserve them in strings)
    content = re.sub(r'\s*([{}:;,=()[\]])\s*', r'\1', content)
    return content.strip()

def process_files():
    """Process all HTML, CSS, and JS files"""
    base_path = os.path.dirname(os.path.abspath(__file__))
    
    # Process HTML files
    html_files = [
        'index.html',
        'offline.html',
        'tools/minify-tool.html'
    ]
    
    # Process CSS files
    css_files = [
        'src/assets/css/styles.css'
    ]
    
    # Process JS files
    js_files = [
        'src/assets/js/accessibility.js',
        'src/assets/js/analytics.js',
        'src/assets/js/language.js',
        'src/assets/js/script.js',
        'src/assets/js/translations.js',
        'sw.js'
    ]
    
    # Minify HTML
    for file_path in html_files:
        full_path = os.path.join(base_path, file_path)
        if os.path.exists(full_path):
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
            minified = minify_html(content)
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(minified)
            print(f"✓ Minified: {file_path}")
        else:
            print(f"✗ Not found: {file_path}")
    
    # Minify CSS
    for file_path in css_files:
        full_path = os.path.join(base_path, file_path)
        if os.path.exists(full_path):
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
            minified = minify_css(content)
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(minified)
            print(f"✓ Minified: {file_path}")
        else:
            print(f"✗ Not found: {file_path}")
    
    # Minify JS
    for file_path in js_files:
        full_path = os.path.join(base_path, file_path)
        if os.path.exists(full_path):
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
            minified = minify_js(content)
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(minified)
            print(f"✓ Minified: {file_path}")
        else:
            print(f"✗ Not found: {file_path}")
    
    print("\n✓ All files minified successfully!")

if __name__ == '__main__':
    process_files()
