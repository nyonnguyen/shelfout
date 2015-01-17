class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
			t.string :provider
			t.string :auth_id
			t.string :name
			t.string :oauth_token
			t.datetime :oauth_expires_at
			t.string :location
      t.timestamps
    end
  end
end
