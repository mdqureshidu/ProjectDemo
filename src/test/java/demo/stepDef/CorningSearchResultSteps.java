package demo.stepDef;


import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.pageAction.CorningSearchResultsActions;

 public class CorningSearchResultSteps {
	 
	 CorningSearchResultsActions CorningSearchResultsActionsobj = new CorningSearchResultsActions();
	
	 @Then("^Optical items should be appeared$")
	 public void optical_items_should_be_appeared() throws Throwable {
	 CorningSearchResultsActionsobj.verifyOptical();
	 
	 }
	 
	@When("^filter by \"([^\"]*)\"$")
	public void filter_by(String Items) throws Throwable {
    CorningSearchResultsActionsobj.FilterItems(Items);
		  
		}
	
	@Then("^Item list should have only open by \"([^\"]*)\"$")
	public void item_list_should_have_only_open_by(String Items) throws Throwable {
	CorningSearchResultsActionsobj.validateItems(Items);
	
	}


}
