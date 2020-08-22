class AddBaseStatsToCharacterSheet < ActiveRecord::Migration[6.0]
  def change
    add_column :character_sheets, :brawn, :integer, :default => 10
    add_column :character_sheets, :intelligence, :integer, :default => 10
    add_column :character_sheets, :perception, :integer, :default => 10
    add_column :character_sheets, :agility, :integer, :default => 10
    add_column :character_sheets, :dexterity, :integer, :default => 10
    add_column :character_sheets, :determination, :integer, :default => 10
    add_column :character_sheets, :barter, :float, :default => 0
    add_column :character_sheets, :money, :float, :default => 0
    add_column :character_sheets, :description, :string
  end
end
