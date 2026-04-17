$xmlPath = "c:\Users\felix\Documents\udevelopers\public\uniteddevelopers.WordPress.2026-04-16.xml"
$outputBase = "c:\Users\felix\Documents\udevelopers\public\images"

$content = Get-Content $xmlPath -Raw
$urls = [regex]::Matches($content, '<wp:attachment_url><!\[CDATA\[(.+?)\]\]></wp:attachment_url>') | ForEach-Object { $_.Groups[1].Value }

# Filter only image files
$imageUrls = $urls | Where-Object { $_ -match '\.(jpg|jpeg|png|gif|svg|webp)$' }

# Categorize by filename patterns
function Get-FolderName($url) {
    $filename = [System.IO.Path]::GetFileName($url).ToLower()
    if ($filename -match 'biltmore|baltimore') { return 'biltmore-parc' }
    if ($filename -match 'santillane') { return '211-santillane' }
    if ($filename -match '26-santillane|front-26') { return '26-santillane' }
    if ($filename -match 'majorca') { return '300-majorca' }
    if ($filename -match 'valencia|v107|lobby.*v|lounge.*v|night.*v|rooftop.*v|frontday') { return '701-valencia' }
    if ($filename -match 'ponce.?leon|1008') { return '1008-e-ponce-de-leon' }
    if ($filename -match 'baytown|barkaloo') { return 'baytown-tx' }
    if ($filename -match 'bella.?noche|6507') { return '6507-bella-noche' }
    if ($filename -match 'bringhurst|2104') { return '2104-bringhurst' }
    if ($filename -match 'amsterdam') { return 'amsterdam-223' }
    if ($filename -match 'queretaro|quetaro') { return 'queretaro-37' }
    if ($filename -match 'home\d|portada|slider') { return 'home-slider' }
    if ($filename -match 'dd-|udevelopers|logo') { return 'branding' }
    if ($filename -match 'miami|coral|merrick|tram') { return 'miami' }
    if ($filename -match 'houston|texas') { return 'houston' }
    if ($filename -match 'mexico|cdmx|condesa|alameda') { return 'mexico-city' }
    if ($filename -match 'contact') { return 'contact' }
    if ($filename -match 'icon|graphic|transport') { return 'icons' }
    if ($filename -match 'flyer|offering') { return 'marketing' }
    if ($filename -match 'ev-|engel|builder|bp-logo|marcusmillichap') { return 'partners' }
    if ($filename -match 'team|jose|jaime|ignacio|cordero|maldonado') { return 'team' }
    if ($filename -match 'sold') { return 'misc' }
    if ($filename -match 'proppierties') { return 'properties-overview' }
    return 'general'
}

Write-Host "Found $($imageUrls.Count) images to download"

foreach ($url in $imageUrls) {
    $folder = Get-FolderName $url
    $targetDir = Join-Path $outputBase $folder
    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }
    $filename = [System.IO.Path]::GetFileName($url)
    # Clean filename (remove URL encoding issues)
    $filename = [System.Uri]::UnescapeDataString($filename)
    $targetFile = Join-Path $targetDir $filename
    if (Test-Path $targetFile) {
        Write-Host "SKIP: $filename (already exists)"
        continue
    }
    try {
        Write-Host "Downloading: $folder/$filename"
        Invoke-WebRequest -Uri $url -OutFile $targetFile -TimeoutSec 30 -ErrorAction Stop
    } catch {
        Write-Host "FAILED: $url - $($_.Exception.Message)"
    }
}

Write-Host "`nDone! Images saved to $outputBase"
