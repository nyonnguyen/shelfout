# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  isbn        :string(255)
#  author      :string(255)
#  category    :string(255)
#  status      :string(255)
#  location    :string(255)
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Book < ActiveRecord::Base
	has_many :user_books, dependent: :destroy
	has_many :users, through: :user_books
end
