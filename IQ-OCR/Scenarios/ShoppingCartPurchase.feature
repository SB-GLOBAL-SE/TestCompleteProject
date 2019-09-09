Feature: ShoppingCartPurchase

@happyPath @login @cart @simple
  Scenario: Simple Login
    Given "Alice" is a registered user
    When she enters her credentials
    Then she is logged in successfully
    
@full @DDT @login @cart
  Scenario: General Login
    Given "the_user" is a registered user
    When they enter their credentials
    Then they are logged in successfully
    
   | the_user |
   | Alice |
   | Bob |
   | Cariad |
   | Eve |
   
@full @DDT @purchase @cart @simple
  Scenario Outline: Purchase a product with no security
    Given "the_user" is logged in
    When they purchase their "product"
    And they check out
    Then the purchase is successful
    
   | the_user | Product |
   | Alice | Xbox |
   | Bob | BD Player |
   | Cariad | iPhone |
   | Eve | Xbox |
   
@simple
 Scenario Outline: Echo values to log
  Given I have values
  When I execute the scenario
  Then the value "<the_user>" and "<Product>" is echoed to the log
 
  Examples:
   | the_user | Product |
   | Alice | Xbox |
   | Bob | BD Player |
   | Cariad | iPhone |
   | Eve | Xbox |

@simple      
Scenario: Test parameters
 Given The Registration form is open
 When I enter "name", "password", "password2", "email"
 Then I should see the "appropriate" message on screen
 
Scenario Outline: Test Registration form
 Given The Registration form is open
 When I enter "<name>", "<password>", "<password2>", "<email>"
 Then I should see the "<msg>" message on screen

 Examples:
  | name | password | password2 | email        | msg              |
  | Joe1 | 12345    | 12345     | joe@mail.com | Welcome          |
  |     | abcd     | abcd      | joe@mail.com | Specify user name|
  | Joe3 | 12345    | 67890     | joe@mail.com | Passwords differ | 
  | Joe4 | abcd     | abcd      |              | Specify email    |
  
  
  @simple
 Scenario Outline: Simple Login to Shopping Site
  Given I can open the site
  When I login with "<username>" and "<password>"
  Then the value "<user>" is visible on the page
 
  Examples:
   | user | username | password | Product |
   | Alice | alice@localhost | password | Xbox |
   | Bob | bob@localhost | password | BD Player |
   | Cariad | cariad@localhost | password | iPhone |
   | Eve | eve@localhost | password | Xbox |
