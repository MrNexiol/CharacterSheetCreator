# frozen_string_literal: true

# == Schema Information
#
# Table name: character_sheet_implications
#
#  id                 :integer          not null, primary key
#  value              :integer          default(0)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  character_sheet_id :integer
#  implication_id     :integer
#
# Indexes
#
#  index_character_sheet_implications_on_character_sheet_id  (character_sheet_id)
#  index_character_sheet_implications_on_implication_id      (implication_id)
#
require 'test_helper'

class CharacterSheetImplicationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
