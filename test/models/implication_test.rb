# frozen_string_literal: true

# == Schema Information
#
# Table name: implications
#
#  id           :integer          not null, primary key
#  name         :string
#  description  :string
#  is_advantage :boolean
#  max_level    :integer
#  point_cost   :integer
#
require 'test_helper'

class ImplicationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
