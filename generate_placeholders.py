import os
from PIL import Image, ImageDraw, ImageFont

placeholders = [
    {"name": "refrigerator-hero-main.jpg", "w": 1920, "h": 1080, "title": "Technician Inspecting Modern Refrigerator", "tag": "Hero Main Banner", "ratio": "16:9"},
    {"name": "refrigerator-residential-service.jpg", "w": 1200, "h": 800, "title": "Residential Household Refrigerator Care", "tag": "Home / About", "ratio": "3:2"},
    {"name": "refrigerator-commercial-service.jpg", "w": 1200, "h": 800, "title": "Commercial Refrigeration & Display Systems", "tag": "Commercial Service", "ratio": "3:2"},
    {"name": "refrigerator-technician-inspection.jpg", "w": 1200, "h": 800, "title": "Careful Refrigerator Diagnostics & Inspection", "tag": "Technical Care", "ratio": "3:2"},
    {"name": "refrigerator-single-door-repair.jpg", "w": 800, "h": 600, "title": "Single Door Compact Refrigerator Service", "tag": "Service Category", "ratio": "4:3"},
    {"name": "refrigerator-double-door-repair.jpg", "w": 800, "h": 600, "title": "Double Door Frost-Free Refrigerator Repair", "tag": "Service Category", "ratio": "4:3"},
    {"name": "refrigerator-side-by-side-repair.jpg", "w": 800, "h": 600, "title": "Side-by-Side Modern Cooling Refrigerator", "tag": "Service Category", "ratio": "4:3"},
    {"name": "refrigerator-french-door-service.jpg", "w": 800, "h": 600, "title": "French Door Multi-Compartment Service", "tag": "Service Category", "ratio": "4:3"},
    {"name": "refrigerator-direct-cool-service.jpg", "w": 800, "h": 600, "title": "Direct Cool Evaporator System Care", "tag": "Service Category", "ratio": "4:3"},
    {"name": "refrigerator-frost-free-service.jpg", "w": 800, "h": 600, "title": "Frost-Free Air Circulation & Defrost Service", "tag": "Service Category", "ratio": "4:3"},
    {"name": "refrigerator-installation.jpg", "w": 1200, "h": 800, "title": "Refrigerator Placement & Leveling Setup", "tag": "Appliance Setup", "ratio": "3:2"},
    {"name": "refrigerator-maintenance.jpg", "w": 1200, "h": 800, "title": "Preventive Maintenance & Gasket Assessment", "tag": "Maintenance Care", "ratio": "3:2"},
    {"name": "refrigerator-freezer-service.jpg", "w": 1200, "h": 800, "title": "Freezer Compartment & Evaporator Inspection", "tag": "Freezer Service", "ratio": "3:2"},
    {"name": "refrigerator-cooling-assessment.jpg", "w": 1200, "h": 800, "title": "Thermostat & Airflow Performance Check", "tag": "Cooling Assessment", "ratio": "3:2"},
    {"name": "refrigerator-water-leak-inspection.jpg", "w": 1200, "h": 800, "title": "Drain Line & Condensation Tray Inspection", "tag": "Leakage Analysis", "ratio": "3:2"},
    {"name": "refrigerator-team.jpg", "w": 1200, "h": 800, "title": "Illustrative Technical Service Personnel", "tag": "Demonstration Team", "ratio": "3:2"},
    {"name": "refrigerator-problem-not-cooling.jpg", "w": 800, "h": 600, "title": "Refrigerator Not Cooling Symptom Check", "tag": "Problem Diagnosis", "ratio": "4:3"},
    {"name": "refrigerator-problem-freezer.jpg", "w": 800, "h": 600, "title": "Freezer Inadequate Frost / Thawing Issue", "tag": "Problem Diagnosis", "ratio": "4:3"},
    {"name": "refrigerator-problem-water-leak.jpg", "w": 800, "h": 600, "title": "Internal & External Water Pooling Concern", "tag": "Problem Diagnosis", "ratio": "4:3"},
    {"name": "refrigerator-problem-noise.jpg", "w": 800, "h": 600, "title": "Vibration, Fan Rattle & Unusual Sounds", "tag": "Problem Diagnosis", "ratio": "4:3"},
    {"name": "refrigerator-problem-ice-formation.jpg", "w": 800, "h": 600, "title": "Heavy Ice Buildup on Coils & Compartment", "tag": "Problem Diagnosis", "ratio": "4:3"},
    {"name": "refrigerator-problem-not-starting.jpg", "w": 800, "h": 600, "title": "Unit Power Inoperative / Compressor Idle", "tag": "Problem Diagnosis", "ratio": "4:3"},
    {"name": "refrigerator-project-double-door.jpg", "w": 1000, "h": 700, "title": "Double Door Refrigerator Inspection", "tag": "Demonstration Project", "ratio": "10:7"},
    {"name": "refrigerator-project-kitchen.jpg", "w": 1000, "h": 700, "title": "Modern Kitchen Refrigerator Setup", "tag": "Demonstration Project", "ratio": "10:7"},
    {"name": "refrigerator-project-side-by-side.jpg", "w": 1000, "h": 700, "title": "Side-by-Side Refrigerator Assessment", "tag": "Demonstration Project", "ratio": "10:7"},
    {"name": "refrigerator-project-freezer.jpg", "w": 1000, "h": 700, "title": "Freezer Maintenance Concept", "tag": "Demonstration Project", "ratio": "10:7"},
    {"name": "refrigerator-project-door-seal.jpg", "w": 1000, "h": 700, "title": "Refrigerator Door Seal Inspection", "tag": "Demonstration Project", "ratio": "10:7"},
    {"name": "refrigerator-project-commercial.jpg", "w": 1000, "h": 700, "title": "Commercial Display Refrigerator", "tag": "Demonstration Project", "ratio": "10:7"},
    {"name": "refrigerator-project-maintenance.jpg", "w": 1000, "h": 700, "title": "Refrigerator Cleaning and Maintenance", "tag": "Demonstration Project", "ratio": "10:7"},
    {"name": "refrigerator-project-installation.jpg", "w": 1000, "h": 700, "title": "Residential Refrigerator Installation", "tag": "Demonstration Project", "ratio": "10:7"}
]

out_dir = os.path.join("assets", "images", "placeholders")
os.makedirs(out_dir, exist_ok=True)

for p in placeholders:
    w, h = p["w"], p["h"]
    img = Image.new("RGB", (w, h), color="#10243A")
    draw = ImageDraw.Draw(img)

    # Draw gradient background simulation
    for y in range(h):
        ratio = y / h
        r = int(16 + (23 - 16) * ratio)
        g = int(36 + (37 - 36) * ratio)
        b = int(58 + (52 - 58) * ratio)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # Draw technical blueprint grid
    grid_size = 40
    for x in range(0, w, grid_size):
        draw.line([(x, 0), (x, h)], fill=(25, 55, 85), width=1)
    for y in range(0, h, grid_size):
        draw.line([(0, y), (w, y)], fill=(25, 55, 85), width=1)

    # Draw diagonal cooling schematic lines
    draw.line([(0, 0), (int(w*0.3), h)], fill=(37, 137, 214), width=1)
    draw.line([(int(w*0.7), 0), (w, h)], fill=(67, 201, 232), width=1)

    # Draw inner framing border
    margin = 30
    draw.rectangle([margin, margin, w - margin, h - margin], outline=(37, 137, 214), width=2)
    draw.rectangle([margin + 6, margin + 6, w - margin - 6, h - margin - 6], outline=(67, 201, 232, 100), width=1)

    # Refrigerator schematic icon in center
    cx, cy = w // 2, h // 2 - 40
    rw, rh = 110, 180
    rx1, ry1 = cx - rw // 2, cy - rh // 2
    rx2, ry2 = cx + rw // 2, cy + rh // 2
    draw.rectangle([rx1, ry1, rx2, ry2], outline=(67, 201, 232), width=3)
    # Freezer divider
    draw.line([(rx1, ry1 + 60), (rx2, ry1 + 60)], fill=(37, 137, 214), width=2)
    # Door handles
    draw.line([(rx2 - 12, ry1 + 15), (rx2 - 12, ry1 + 45)], fill=(255, 157, 82), width=3)
    draw.line([(rx2 - 12, ry1 + 75), (rx2 - 12, ry1 + 130)], fill=(255, 157, 82), width=3)
    # Airflow waves
    draw.arc([cx - 40, cy - 20, cx + 40, cy + 20], start=180, end=360, fill=(67, 201, 232), width=2)
    draw.arc([cx - 30, cy, cx + 30, cy + 40], start=0, end=180, fill=(37, 137, 214), width=2)

    # Badge: IMAGE PLACEHOLDER
    badge_w, badge_h = 240, 36
    bx1, by1 = cx - badge_w // 2, cy - rh // 2 - 60
    bx2, by2 = cx + badge_w // 2, by1 + badge_h
    draw.rectangle([bx1, by1, bx2, by2], fill=(37, 137, 214), outline=(67, 201, 232), width=1)
    
    # Try default font
    try:
        font_large = ImageFont.truetype("arial.ttf", 26 if w > 900 else 20)
        font_title = ImageFont.truetype("arialbd.ttf", 32 if w > 900 else 24)
        font_sub = ImageFont.truetype("arial.ttf", 18 if w > 900 else 15)
        font_badge = ImageFont.truetype("arialbd.ttf", 14)
    except:
        font_large = font_title = font_sub = font_badge = ImageFont.load_default()

    draw.text((cx, by1 + 18), "IMAGE PLACEHOLDER", fill=(255, 255, 255), anchor="mm", font=font_badge)
    
    # Title text
    ty = cy + rh // 2 + 35
    draw.text((cx, ty), p["title"], fill=(255, 255, 255), anchor="mm", font=font_title)
    
    # Filename & specs
    fy = ty + 38
    draw.text((cx, fy), f"Target File: {p['name']}", fill=(67, 201, 232), anchor="mm", font=font_large)
    
    sy = fy + 32
    draw.text((cx, sy), f"Dimensions: {w} × {h} px  |  Aspect Ratio: {p['ratio']}  |  {p['tag']}", fill=(234, 246, 252), anchor="mm", font=font_sub)

    # Footer note
    draw.text((cx, h - margin - 20), "TSCG TECHNOLOGIES DEMO — READY FOR GOOGLE FLOW REPLACEMENT", fill=(120, 160, 195), anchor="mm", font=font_sub)

    filepath = os.path.join(out_dir, p["name"])
    img.save(filepath, "JPEG", quality=90)

print(f"Generated {len(placeholders)} image placeholders successfully in {out_dir}")
