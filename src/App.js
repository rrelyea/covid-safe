import './App.css';
import masks from './assets/img/mask.svg';
import tests from './assets/img/beaker.svg';
import syringe from './assets/img/syringe.svg';
import treatment from './assets/img/treatment.svg';
import ventilation from './assets/img/ventilation-icon.svg';

function App() {
  return ( <div className="App">

  <main id="main-content" class="covidgov-main">
    <div class="location-toolkit-wrap">
      <div class="toolkit">
        <div class="toolkit__wrap">
          <div class="toolkit__intro">
            <h1 class="center">covid-safe</h1>
            <p>Resources to keep yourself and others safe from COVID-&#8288;19.</p>
            <p>(Info from <a href='https://covid.gov'>covid.gov</a>, reorganized, and supplemented.)</p>
          </div>
          <h2 class="line-title">Preventive Medicines</h2>
          <div class="toolkit__boxes">
            <div class="toolkit__box">
              <div class="toolkit__box__icon toolkit__desktop__icon">
                <img src={syringe} class="small" width="47" height="55" alt="Syringe Icon" />
              </div>
              <div class="toolkit__box__content">
                <h3>
                  <div class="toolkit__box__icon toolkit__mobile__icon">
                    <img src={syringe} class="small" width="47" height="55" alt="Syringe Icon" />
                  </div>
                  <span>Vaccines/Boosters</span>
                </h3>
                <p>Being fully vaccinated and boosted is the best way to protect against severe illness and hospitalization from COVID-&#8288;19.</p>
                <a href="https://vaccines.gov/search" rel="noopener">Find a vaccine or booster at vaccines.gov</a>
              </div>
            </div>
            <div class="toolkit__box">
              <div class="toolkit__box__icon toolkit__desktop__icon">
                <img src={syringe} class="small" width="47" height="55" alt="Syringe Icon" />
              </div>
              <div class="toolkit__box__content">
                <h3>
                  <div class="toolkit__box__icon toolkit__mobile__icon">
                    <img src={syringe} class="small" width="47" height="55" alt="Syringe Icon" />
                  </div>
                  <span>Additional Protection for the Immunocompromised</span>
                </h3>
                <p>
                The latest CDC guidance for those who are immunocompromised, including where to get preventative treatment.
              </p>
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#immunocompromised" rel="noopener">CDC guidance for immunocompromised</a>

                <p>If you are moderately to severely immunocompromised, for many finding Evusheld isn't as easy as it should be.</p>
                <a href="https://rrelyea.github.io/evusheld" rel="noopener">Evusheld locator</a>
               
              </div>
            </div>
          </div>

          <h2 class="line-title">Protective Measures</h2>
          <div class="toolkit__boxes">
            <div class="toolkit__box">
              <div class="toolkit__box__icon toolkit__desktop__icon">
                <img src={masks} width="52" height="31" alt="Mask Icon" />
              </div>
              <div class="toolkit__box__content">
                <h3>
                  <div class="toolkit__box__icon toolkit__mobile__icon">
                    <img src={masks} width="52" height="31" alt="Mask Icon" />
                  </div>
                  <span>Masks</span>
                </h3>
                <p>Wear a mask to protect yourself and others when you go indoors in public.</p>
                <p>Free N95 masks are available at many local pharmacies and healthcare providers. Check with stores in your area to see where you can find free masks.</p>
                <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/masks.html" rel="noopener">Learn more about masks and where to get them</a>
              </div>
            </div>
            <div class="toolkit__box">
              <div class="toolkit__box__icon toolkit__desktop__icon">
                <img src={ventilation} width="38" height="38" alt="Ventilation Icon" />
              </div>
              <div class="toolkit__box__content">
                <h3>
                  <div class="toolkit__box__icon toolkit__mobile__icon">
                    <img src={ventilation} width="38" height="38" alt="Ventilation Icon" />
                  </div>
                  <span>Ventilation</span>
                </h3>
                <p>Staying home with only members of your household is the best way to keep SARS-CoV-2 (the virus that causes COVID-19) particles out of your home. However, if a visitor needs to be in your home, improving ventilation (air flow) can help prevent virus particles from accumulating in the air in your home.</p>
                <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/improving-ventilation-home.html" rel="noopener">Improve Ventilation in Your Home</a>
              </div>
            </div>
            <div class="toolkit__box">
              <div class="toolkit__box__icon toolkit__desktop__icon">
                <img src={tests} width="32" height="42" alt="Beaker Icon" />
              </div>
              <div class="toolkit__box__content">
                <h3>
                  <div class="toolkit__box__icon toolkit__mobile__icon">
                    <img src={tests} width="32" height="42" alt="Beaker Icon" />
                  </div>
                  <span>Testing</span>
                </h3>
                <p>COVID tests can help you know if you have COVID-&#8288;19 when you have symptoms, have been exposed, or are about to meet up with others.</p>
                <a href="https://covid.gov/tests" rel="noopener">Order free tests</a>

                <p>
                  The latest guidance on using at-home tests, what to do with the results, and how to get at-home tests.
                </p>
                <a href="https://www.cdc.gov/coronavirus/2019-ncov/testing/self-testing.html" rel="noopener">Learn more about at-home testing</a>
              </div>
            </div>
          </div>

          <h2 class="line-title">Have Covid?</h2>
          <div class="toolkit__boxes">
            <div class="toolkit__box">
              <div class="toolkit__box__icon toolkit__desktop__icon">
                <img src={treatment} width="38" height="38" alt="Medical Icon" />
              </div>
              <div class="toolkit__box__content">
                <h3>
                  <div class="toolkit__box__icon toolkit__mobile__icon">
                    <img src={treatment} width="38" height="38" alt="Medical Icon" />
                  </div>
                  <span>Test-to-Treat</span>
                </h3>
                <p>Treatments for COVID-&#8288;19 are now widely available. If you test positive for COVID-19, talk to a doctor as soon as possible about <a href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/treatments-for-severe-illness.html" class="usa-link usa-link--external" rel="noopener">treatment options</a>.</p>
                <p>The Test-to-Treat program is one easy way to get treatment. Test-to-Treat locations will give you a test and treatment.</p>
                <a href="https://COVID-&#8288;19-test-to-treat-locator-dhhs.hub.arcgis.com" rel="noopener">Find a Test-to-Treat location near you</a>
              </div>
            </div>
            <div class="toolkit__box">
              <div class="toolkit__box__icon toolkit__desktop__icon">
                <img src={treatment} width="38" height="38" alt="Medical Icon" />
              </div>
              <div class="toolkit__box__content">
                <h3>
                  <div class="toolkit__box__icon toolkit__mobile__icon">
                    <img src={treatment} width="38" height="38" alt="Medical Icon" />
                  </div>
                  <span>Treatments</span>
                </h3>
                <p>Treatments for COVID-&#8288;19 are now widely available. If you test positive for COVID-19, talk to a doctor as soon as possible about <a href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/treatments-for-severe-illness.html" class="usa-link usa-link--external" rel="noopener">treatment options</a>.</p>
                <p>Once you get a prescription, sometimes it helps to know which pharmacies have these in stock:</p>
                <a href="https://rrelyea.github.io/paxlovid" rel="noopener">Paxlovid locator</a><br/>
                <a href="https://rrelyea.github.io/bebtelovimab" rel="noopener">Bebtelovimab locator</a><br/> 
                <a href="https://rrelyea.github.io/lagevrio" rel="noopener">Molnuripavir (Lagevrio) locator</a><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  Contact: <a href="https://linktr.ee/rrelyea">Rob Relyea</a><br/>
  Open Source: <a href="https://github.com/rrelyea/covid-safe">github.com/rrelyea/covid-safe</a><br/>

    </div>
  );
}

export default App;
