# frozen_string_literal: true

# == Schema Information
#
# Table name: skills
#
#  id               :integer          not null, primary key
#  name             :string
#  parent_stat      :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  start_value      :integer          default(0)
#  is_equal_to_stat :boolean          default(FALSE)
#
require 'test_helper'

class SkillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
