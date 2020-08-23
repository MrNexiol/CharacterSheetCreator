class AddDefaultExpToCharacterSheet < ActiveRecord::Migration[6.0]
  def change
    change_column :character_sheets, :experience, :integer, :default => 150
  end
end
