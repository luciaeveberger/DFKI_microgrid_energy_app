class ComponentType < ActiveRecord::Base
	has_many :componentdetails
	# share structure from the front end
end
