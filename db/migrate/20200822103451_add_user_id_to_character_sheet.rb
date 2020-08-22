class AddUserIdToCharacterSheet < ActiveRecord::Migration[6.0]
  def change
    add_column :character_sheets, :user_id, :integer
  end
end
