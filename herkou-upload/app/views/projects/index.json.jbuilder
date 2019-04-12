json.array!(@projects) do |project|
  json.extract! project, :id, :title, :author, :description, :coordinates,
  json.url project_url(project, format: :json)
end
