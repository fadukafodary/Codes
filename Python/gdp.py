import matplotlib.pyplot as plt

# Data for top 10 states by GSDP 2024
states = ["Maharashtra", "Tamil Nadu", "Karnataka", "Gujarat", "Uttar Pradesh", 
          "West Bengal", "Rajasthan", "Telangana", "Andhra Pradesh", "Madhya Pradesh"]
gsdp = [42.67, 31.55, 28.09, 27.90, 24.99, 18.80, 17.80, 16.50, 15.89, 15.22]  # in lakh crore INR

# Create bar chart
plt.figure(figsize=(12,6))
bars = plt.barh(states, gsdp, color='skyblue')
plt.xlabel("GSDP (₹ Lakh Crore)")
plt.title("Top 10 Indian States by GSDP - 2024 (Estimated)")
plt.gca().invert_yaxis()  # Highest GSDP on top

# Add data labels
for bar in bars:
    width = bar.get_width()
    plt.text(width + 0.5, bar.get_y() + bar.get_height()/2, f'{width}', va='center')

# Save as JPEG
plt.tight_layout()
plt.savefig("Top10_States_GSDP_2024.jpg", format='jpg')
plt.show()
