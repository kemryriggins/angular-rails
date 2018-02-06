# create_table "freelance_documents", force: :cascade do |t|
#    t.string "title"
#    t.string "description"
#    t.text "file_url"
#    t.text "image_url"
#    t.datetime "created_at", null: false
#    t.datetime "updated_at", null: false
#  end

10.times do |d|
	FreelanceDocument.create!(
		title: "Document #{d}", 
		description: "Freelancing is often spoken of as the “Wild West” of the employment world. Freelancers “go rogue,” and they “ride off into the sunset” to enjoy their new lives of unparalleled freedom and opportunity.",
		file_url: "https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/edit?usp=sharing",
		image_url: 'https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg'
	)
end
