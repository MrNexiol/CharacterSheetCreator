class AddIsEqualToStatToSkill < ActiveRecord::Migration[6.0]
  def change
    add_column :skills, :is_equal_to_stat, :boolean
  end
end
