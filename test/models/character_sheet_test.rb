# frozen_string_literal: true

# == Schema Information
#
# Table name: character_sheets
#
#  id            :integer          not null, primary key
#  name          :string
#  experience    :integer          default(150)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer
#  brawn         :integer          default(10)
#  intelligence  :integer          default(10)
#  perception    :integer          default(10)
#  agility       :integer          default(10)
#  dexterity     :integer          default(10)
#  determination :integer          default(10)
#  barter        :float            default(0.0)
#  money         :float            default(0.0)
#  description   :string
#
require 'test_helper'

class CharacterSheetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
