class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
			t.string :title
			t.string :isbn
			t.string :author
			t.string :category
			t.string :status
			t.string :location
			t.text :description
      t.timestamps
    end
  end
end
