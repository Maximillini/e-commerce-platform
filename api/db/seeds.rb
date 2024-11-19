# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require 'http'

puts "Fetching products from FakeStoreAPI..."

# Fetch products
response = HTTP.get("https://fakestoreapi.com/products")
if response.status.success?
  products = JSON.parse(response.body)

  puts "Seeding products into the database..."

  products.each do |product|
    Product.create!(
      title: product["title"],
      description: product["description"],
      price: product["price"],
      category: product["category"],
      image_url: product["image"]
    )
  end

  puts "Seeding complete! #{products.size} products added."
else
  puts "Failed to fetch products. Status: #{response.status}"
end
