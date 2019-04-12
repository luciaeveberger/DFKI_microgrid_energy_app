class Simulation < ActiveRecord::Base
	 belongs_to :user, required:false
	 serialize :project
end
