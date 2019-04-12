require 'test_helper'

class LicenseTest < ActiveSupport::TestCase
  def setup
    @license = licenses(:license)
  end

  test 'should be valid' do
    assert @license.valid?, @license.errors.full_messages
  end

  test 'title should be present' do
    @license.title = '     '
    assert_not @license.valid?
  end

  test 'title should not be too long' do
    @license.title = 'a' * 1001
    assert_not @license.valid?, @license.errors.full_messages
  end

  test 'description should be present' do
    @license.description = ''
    assert_not @license.valid?
  end

  test 'description should not be too long' do
    @license.description = 'a' * 10001
    assert_not @license.valid?
  end

  test 'price should be present' do
    @license.price = ''
    assert_not @license.valid?, @license.errors.full_messages
  end

  test 'price should not be too long' do
    @license.price = 'a' * 1001
    assert_not @license.valid?
  end
end