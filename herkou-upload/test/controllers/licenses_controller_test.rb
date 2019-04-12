require 'test_helper'

class LicensesControllerTest < ActionController::TestCase
  include Devise::Test::ControllerHelpers

  def setup
    @request.env['devise.mapping'] = Devise.mappings[:admin]
  end

  test 'should not get index without login' do
    get :index
    assert_response :redirect
  end

  test 'should get index' do
    sign_in users(:user)
    get :index
    assert_response :success
  end

end