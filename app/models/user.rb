# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  provider         :string(255)
#  auth_id          :string(255)
#  name             :string(255)
#  oauth_token      :string(255)
#  oauth_expires_at :datetime
#  location         :string(255)
#  created_at       :datetime
#  updated_at       :datetime
#

class User < ActiveRecord::Base
	has_many :user_books, dependent: :destroy
	has_many :books, through: :user_books

	def self.from_omniauth(auth)
	  where(auth.slice(:provider, :auth_id)).first_or_initialize.tap do |user|
	    user.provider = auth.provider
	    user.auth_id = auth.uid
	    user.name = auth.info.name
	    user.oauth_token = auth.credentials.token
	    user.oauth_expires_at = Time.at(auth.credentials.expires_at)
	    user.save!
  	end
  end
  
end
