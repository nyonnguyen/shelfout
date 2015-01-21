# == Schema Information
#
# Table name: user_books
#
#  id           :integer          not null, primary key
#  user_id      :integer
#  book_id      :integer
#  relationship :string(255)
#  review       :text
#  created_at   :datetime
#  updated_at   :datetime
#

class UserBook < ActiveRecord::Base
	belongs_to :user
	belongs_to :book
end
