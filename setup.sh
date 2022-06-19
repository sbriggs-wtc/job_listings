docker exec job_listings_server php artisan migrate &&
docker exec job_listings_server php artisan db:seed --class=JobListingSeeder
