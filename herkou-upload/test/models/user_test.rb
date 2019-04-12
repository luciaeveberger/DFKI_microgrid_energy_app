require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user                       = users(:new_user)
    @user.password              = 'password123'
    @user.password_confirmation = 'password123'

    @admin                       = users(:new_admin)
    @admin.password              = 'password123'
    @admin.password_confirmation = 'password123'
  end

  test 'should be valid' do
    assert @user.valid?, @user.errors.full_messages
    assert @admin.valid?, @user.errors.full_messages
  end

  test 'user should not be an admin' do
    assert_not @user.admin?
  end

  test 'admin should be marked as an admin' do
    assert @admin.admin?
  end

  test 'email should be present' do
    @user.email = '     '
    assert_not @user.valid?
  end

  test 'mail should be a valid address' do
    @user.email = 'user'
    assert_not @user.valid?

    @user.email = 'user@example'
    assert_not @user.valid?

    @user.email = 'user@.de'
    assert_not @user.valid?

    @user.email = '@example.com'
    assert_not @user.valid?
  end

  test 'email should not be too long' do
    @user.email = 'a' * 244 + '@example.com'
    assert_not @user.valid?, @user.errors.full_messages
  end

  test 'email validation should accept valid addresses' do
    addresses = %w[user@example.com USER@foo.COM A_BC-XYZ@foo.bar.org
                         first.last@example.jp alice+bob@uk.com]
    addresses.each do |a|
      @user.email = a
      assert @user.valid?, "#{a.inspect} should be valid"
    end
  end

  test 'email validation should reject invalid addresses' do
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
                           foo@bar_baz.com foo@bar+baz.com]
    invalid_addresses.each do |ia|
      @user.email = ia
      assert_not @user.valid?, "#{ia.inspect} should be invalid, because: #{@user.errors.full_messages}"
    end
  end

  test 'email addresses should be unique' do
    duplicate_user = @user.dup
    @user.save
    assert_not duplicate_user.valid?

    duplicate_user.email = @user.email.upcase
    @user.save
    assert_not duplicate_user.valid?
  end

  test 'first name can be present' do
    @user.first_name = ''
    assert @user.valid?
  end

  test 'first name should not be too long' do
    @user.first_name = 'a' * 260
    assert_not @user.valid?
  end

  test 'first name validation should accept valid name' do
    names = ['Max-Moritz', 'Max', 'Max Moritz', 'Max Moritz Klaus Tom', 'Max-Moritz-Klaus-Tom', 'Mäx', 'Claaß']
    names.each do |name|
      @user.first_name = name
      assert @user.valid?, "#{name.inspect} should be valid"
      assert @user.first_name == name.split(" ").join(" ")
    end
  end

  test 'first name validation should reject invalid names' do
    names = ['Max_Moritz', 'Max.', 'user@example', '!§$%', 'Max-', '-Max', 'Max & Moritz', '14213', 'Max 2', 'Mäx!']
    names.each do |name|
      @user.first_name = name
      assert_not @user.valid?, "#{name.inspect} should be invalid"
    end
  end

  test 'last name can be present' do
    @user.last_name = ''
    assert @user.valid?, @user.errors.full_messages
  end

  test 'last name should not be too long' do
    @user.last_name = 'a' * 260
    assert_not @user.valid?
  end

  test 'last name validation should accept valid name' do
    names = ['Mustermann', 'Muster-Mann', 'Muster-Mann-Und-Frau', 'von Mustermann', 'Müstermänn', 'Strauß']
    names.each do |name|
      @user.last_name = name
      assert @user.valid?, "#{name.inspect} should be valid"
      assert @user.last_name == name.split(" ").join(" ")
    end
  end

  test 'last name validation should reject invalid name' do
    names = ['Mustermann-', 'Mustermann.', 'user@example', '!§$%', 'von Mustermann-', '14213', 'Mustermann 2', 'Müstermänn9', 'Strauß-3']
    names.each do |name|
      @user.last_name = name
      assert_not @user.valid?, "#{name.inspect} should be invalid"
    end
  end

  test 'password should be present (nonblank)' do
    @user.password = @user.password_confirmation = ' ' * 6
    assert_not @user.valid?
  end

  test 'password should have a minimum length' do
    @user.password = @user.password_confirmation = 'a1'
    assert_not @user.valid?
  end

  test 'password should have a maximum length' do
    @user.password = @user.password_confirmation = 'a1!' * 300
    assert_not @user.valid?
  end

  test 'password should be equal to password confirmation' do
    @user.password              = 'password123'
    @user.password_confirmation = ''
    assert_not @user.valid?

    @user.password_confirmation = 'password321'
    assert_not @user.valid?
  end

  test 'address can be present' do
    @user.address = ''
    assert @user.valid?, @user.errors.full_messages
  end

  test 'address should not be too long' do
    @user.address = 'a' * 260
    assert_not @user.valid?
  end

  test 'country can be present' do
    @user.country = ''
    assert @user.valid?
  end

  test 'country should not be too long' do
    @user.country = 'a' * 260
    assert_not @user.valid?
  end

  test 'city can be present' do
    @user.city = ''
    assert @user.valid?
  end

  test 'city should not be too long' do
    @user.city = 'a' * 260
    assert_not @user.valid?
  end

end