require 'test_helper'

class UserAssociationTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  def setup
    @user                  = users(:user)
    sign_in @user
  end

  test 'can have organization' do
    # User is valid even without organization set
    @user.organization = nil
    assert @user.valid?
    get license_path
    assert_template 'licenses/index'

    # Set organization
    # TODO: Set tests when organization resources are set
  end
end