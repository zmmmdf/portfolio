import re

with open('output.html', 'r') as f:
    content = f.read()

# GitHub lists typically have links like: href="/username/repo" class="d-inline-block"
# or similar inside h3 tags
matches = re.finditer(r'<h3 class="wb-break-all">.*?href="/([^"]+)"', content, re.DOTALL)
repos = [m.group(1) for m in matches]
print("Found repos (h3):", repos)

if not repos:
    # try another regex
    matches = re.finditer(r'href="/([^"]+/[^"]+)" itemprop="name codeRepository"', content)
    repos = [m.group(1) for m in matches]
    print("Found repos (itemprop):", repos)

if not repos:
    matches = re.finditer(r'<a[^>]*href="/([^"]+/[^"]+)"[^>]*>', content)
    a_tags = [m.group(1) for m in matches if "stars" not in m.group(1) and "mziya" not in m.group(1)]
    print("Sample links:", a_tags[:20])
