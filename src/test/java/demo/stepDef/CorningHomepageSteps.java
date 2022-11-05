package demo.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import demo.pageAction.CorningHomepageActions;

public class CorningHomepageSteps {
	
	CorningHomepageActions CorningHomepageActionsobj = new CorningHomepageActions();
	
	
	@Given("^Open Corning Homepage$")
	public void open_Corning_Homepage() throws Throwable {
    CorningHomepageActionsobj.loadCorningHomepage();
	}
	
	@Given("^open Corning homepage$")
	public void open_Corning_homepage() throws Throwable {
		CorningHomepageActionsobj.loadCorningHomepage();
	}
    
    @When("^Click on Search box$")
    public void click_on_Search_box() throws Throwable {
    	CorningHomepageActionsobj.ClickSearchbx();
    }
	    
	@When("^Search for optical$")
	public void search_for_optical() throws Throwable {
			CorningHomepageActionsobj.SearchOptical();
		}
	
	@When("^Click on Submit button$")
	public void click_on_Submit_button() throws Throwable {
		CorningHomepageActionsobj.SubmitOptical();
	    
	}
	    	
	@When("^Search by the \"([^\"]*)\"$")
	public void search_by_the(String Items) throws Throwable {
		CorningHomepageActionsobj.SearchItems(Items);
	}

	
	

}
