class CreateComponentOperationParameters < ActiveRecord::Migration[5.0]
  def change
    create_table :component_operation_parameters do |t|
    	t.integer 'component_details_id'
    	t.index ["component_details_id"], name: "index_component_operation_parameters_on_component_details_id"
    	t.string "first_power_input_min_specific"
    	t.string "first_power_input_min_offset"
    	t.string "first_power_input_max_specific"
    	t.string "first_power_input_max_offset"
    	t.string "second_power_input_min_specific"
    	t.string "second_power_input_min_offset"
    	t.string "second_power_input_max_specific"
    	t.string "second_power_input_max_offset"
    	t.string "first_output_input_min_specific"
    	t.string "first_output_input_min_offset"
    	t.string "first_output_input_max_specific"
    	t.string "first_output_input_max_offset"
    	t.string "second_output_input_min_specific"
    	t.string "second_output_input_min_offset"
    	t.string "second_output_input_max_specific"
    	t.string "second_output_input_max_offset"
    	t.string "soc_min_sprecific"
    	t.string "soc_min_offset"
    	t.string "second_output_type_relative_to_output_1"
    	t.string "second_output_type_direct"
    	t.string "second_output_type_gain_specific_capacity"
    	t.string "second_output_type_loss_offset"
    	t.string "gradients_upward"
    	t.string "gradients_downwards"
    	t.string "continuous_standstill_time_min"
    	t.string "continuous_standstill_time_max"
    	t.string "startup_standstill_time_boundary"
    	t.string "startup_standstill_duration_specific_capacity"
    	t.string "startup_standstill_duration_offset"
    	t.string "startup_standstill_input_specific_capacity"
    	t.string "startup_standstill_input_offset"

    end
  end
end
