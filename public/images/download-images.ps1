$imageUrls = @(
    @{
        Url = "https://source.unsplash.com/random/1920x1080/?business,modern"
        Filename = "hero-bg.jpg"
    },
    @{
        Url = "https://source.unsplash.com/random/800x600/?office,corporate"
        Filename = "about-image.jpg"
    },
    @{
        Url = "https://source.unsplash.com/random/600x400/?digital,technology"
        Filename = "digital-solutions.jpg"
    },
    @{
        Url = "https://source.unsplash.com/random/600x400/?construction,materials"
        Filename = "construction-materials.jpg"
    },
    @{
        Url = "https://source.unsplash.com/random/600x400/?ecommerce,online"
        Filename = "ecommerce.jpg"
    },
    @{
        Url = "https://source.unsplash.com/random/600x400/?retail,store"
        Filename = "retail.jpg"
    }
)

foreach ($image in $imageUrls) {
    $outputPath = Join-Path -Path $PSScriptRoot -ChildPath $image.Filename
    Write-Host "Downloading $($image.Url) to $outputPath"
    Invoke-WebRequest -Uri $image.Url -OutFile $outputPath
}

Write-Host "All images downloaded successfully!"
