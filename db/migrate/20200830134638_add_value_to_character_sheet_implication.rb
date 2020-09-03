class AddValueToCharacterSheetImplication < ActiveRecord::Migration[6.0]
  def change
    add_column :character_sheet_implications, :value, :integer, default: 0
  end
end
