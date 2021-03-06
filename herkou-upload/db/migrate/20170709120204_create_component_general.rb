class CreateComponentGeneral < ActiveRecord::Migration[5.0]
  def change
    create_table :component_general_parameters do |t|
    	t.integer 'component_details_id'
    	t.index ["component_details_id"], name: "index_component_general_parameters_on_component_details_id"
    	t.string    'installation_bus_connection_input_1'
        t.string    'installation_bus_connection_input_2'
        t.string    'installation_bus_connection_output_1'
        t.string    'installation_bus_connection_output_2'
        t.string    'required_resource_primary_energy_1'
        t.string    'required_resource_primary_energy_2'
        t.string    'required_resource_secondary_energy_1'
        t.string    'required_resource_secondary_energy_2'
        t.string    'capacity_boundary_first_definition'
        t.string    'first_definition_main_rated_power'
        t.string    'capacity_boundary_first_definition_min_fixed'
        t.string    'capacity_boundary_first_definition_recommended_max'
        t.string    'capacity_boundary_first_definition_strict_max'
        t.string    'second_definition'
        t.string    'capacity_boundary_second_definition_min_fixed'
        t.string    'capacity_boundary_second_definition_recommended_max'
        t.string    'capacity_boundary_second_definition_strict_max'
        t.string    'boundaries_first_power_input_min_specific'
        t.string    'boundaries_first_power_input_min_offset'
        t.string    'boundaries_first_power_input_max_specific'
        t.string    'boundaries_first_power_input_max_offset'
        t.string    'boundaries_second_power_input_min_specific'
        t.string    'boundaries_second_power_input_min_offset'
        t.string    'boundaries_second_power_input_max_specific'
        t.string    'boundaries_second_power_input_max_offset'
        t.string    'boundaries_first_output_input_min_specific'
        t.string    'boundaries_first_output_input_min_offset'
        t.string    'boundaries_first_output_input_max_specific'
        t.string    'first_output_input_max_offset'
        t.string    'second_output_input_min_specific'
        t.string    'second_output_input_min_offset'
        t.string    'second_output_input_max_specific'
        t.string    'second_output_input_max_offset'
        t.string    'soc_min_sprecific'
        t.string    'soc_min_offset'
        t.string    'first_output_type'
        t.string    'first_output_type_direct'
        t.string    'first_output_type_specific_gain'
        t.string    'first_output_type_loss_offset'
        t.string    'first_output_x_value_input_table'
        t.string    'first_output_y_value_output_table'
        t.string    'first_output_x_value_input_diagram'
        t.string    'first_output_y_value_output_diagram'
        t.string    'second_output_type'
        t.string    'second_output_type_relative_to_output_1'
        t.string    'second_output_type_direct'
        t.string    'second_output_type_gain_specific_capacity'
        t.string    'second_output_type_loss_offset'
        t.string    'gradients_upward'
        t.string    'gradients_downwards'
        t.string    'continuous_runtime_min'
        t.string    'continuous_runtime_max'
        t.string    'continuous_standstill_time_min'
        t.string    'continuous_standstill_time_max'
        t.string    'startup_standstill_time_boundary'
        t.string    'startup_standstill_duration_specific_capacity'
        t.string    'startup_standstill_duration_offset'
        t.string    'startup_standstill_input_specific_capacity'
        t.string    'startup_standstill_input_offset'

    end
  end
end
