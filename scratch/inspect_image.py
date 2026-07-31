from PIL import Image

img_path = r"C:\Users\Shivam Kadam\.gemini\antigravity-ide\brain\6e732398-1d26-4fda-a0da-72313a40e9b9\media__1785412959381.png"
img = Image.open(img_path)
width, height = img.size
print(f"Image dimensions: {width}x{height}")

# Inspect first few rows of pixels at the top-left corner
for y in range(20):
    row_pixels = [img.getpixel((x, y)) for x in range(20)]
    print(f"y={y:2d}: {row_pixels[:10]}")
