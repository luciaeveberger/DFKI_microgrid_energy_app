class Api::ProjectsController < API::BaseController
  skip_before_action :verify_authenticity_token
  respond_to :json
  
  def index
    @projects = current_user.projects
    respond_with :api, @projects
  end

  def show
    @project = Project.find(params[:id])
    respond_with :api, @project
  end

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    @project.save
    respond_with :api, @project
    # need to find this @TODo: figure this out 
  end


  def destroy
    if Project.find params[:id]
       @project = Project.find params[:id]
       @project.destroy
       respond_with :api, @projects
    end 
   
  end

  def project_params
      params.require(:project).permit(:title, :author, :description, :coordinates)
  end
end
