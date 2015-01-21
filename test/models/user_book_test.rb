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

require 'test_helper'

class UserBookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
