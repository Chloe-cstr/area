import './specs.scss';
import Button from '../Button/Button';
import Table from '../Table/Table';

const Specs = () =>{
    const specsData = {
        "Area": [
          { "feature": "Ultra-fast browsing", "icon": "fa-solid fa-check", "label": "Ultra-fast browsing" },
          { "feature": "Advanced AI insights", "icon": "fa-solid fa-check", "label": "Advanced AI insights" },
          { "feature": "Seamless integration", "icon": "fa-solid fa-check", "label": "Seamless integration" },
          { "feature": "Advanced AI insights", "icon": "fa-solid fa-check", "label": "Advanced AI insights" },
          { "feature": "Ultra-fast browsing", "icon": "fa-solid fa-check", "label": "Ultra-fast browsing" },
          { "feature": "Full UTF-8 support", "icon": "fa-solid fa-check", "label": "Full UTF-8 support" }
        ],
        "WebSurge": [
          { "feature": "Ultra-fast browsing", "icon": "fa-solid fa-check", "label": "Fast browsing" },
          { "feature": "Advanced AI insights", "icon": "fa-solid fa-check", "label": "Basic AI recommendations" },
          { "feature": "Seamless integration", "icon": "fa-solid fa-check", "label": "Restricts customization" },
          { "feature": "Advanced AI insights", "icon": "fa-solid fa-xmark", "label": "Basic AI insights" },
          { "feature": "Ultra-fast browsing", "icon": "fa-solid fa-check", "label": "Fast browsing" },
          { "feature": "Full UTF-8 support", "icon": "fa-solid fa-xmark", "label": "Potential display errors" }
        ],
        "HyperView": [
          { "feature": "Ultra-fast browsing", "icon": "fa-solid fa-xmark", "label": "Moderate speeds" },
          { "feature": "Advanced AI insights", "icon": "fa-solid fa-xmark", "label": "No AI assistance" },
          { "feature": "Seamless integration", "icon": "fa-solid fa-xmark", "label": "Steep learning curve" },
          { "feature": "Advanced AI insights", "icon": "fa-solid fa-xmark", "label": "No AI assistance" },
          { "feature": "Ultra-fast browsing", "icon": "fa-solid fa-xmark", "label": "Moderate speeds" },
          { "feature": "Full UTF-8 support", "icon": "fa-solid fa-xmark", "label": "Partial UTF-8 support" }
        ]
    }

    return(
        <div className="specs">
            <div className="specs__title">
                <h2 className='specs__title--width'>Why Choose Area?</h2>
                <h3>Specs</h3>
            </div>
            <div className='specs__presentation'>
                <p>
                    You need a solution that keeps up. That’s why we 
                    developed Area. A developer-friendly approach to 
                    streamline your business. 
                </p>
                <Button 
                    text="Discover More"
                    className="button__empty"
                    link="https://github.com/Chloe-cstr?tab=repositories"
                />
            </div>
            <div className='specs__table'>
                <Table data={specsData}/>
            </div>
        </div>
    )
};

export default Specs;