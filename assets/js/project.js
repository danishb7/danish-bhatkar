// Project details in portfolio display order.
const projectData = {
    "wisepick": {
        "title": "WisePick: Intentional Phone Habits",
        "timeline": "Co-developed with Berry Mocha · Android · Available on Google Play",
        "details": [
            "Co-developed an Android app that uses brief check-ins after selected device unlocks to help people reflect on why they picked up their phone.",
            "Users can customize pickup reasons, choose check-in frequency, and review daily insights and weekly patterns.",
            "The app focuses on awareness without blocking other apps or imposing screen-time limits."
        ],
        "projectLink": "https://play.google.com/store/apps/details?id=com.berrymocha.wisepick",
        "linkLabel": "View on Google Play ↗"
    },
    "project2": {
        "title": "Wildfire Detection with ResNet-50",
        "timeline": "Nov 2024 - Dec 2024",
        "details": [
            "Implemented a fire/no-fire classification system by training ResNet-50 models from scratch on 11 unique wildfire datasets, ensuring independent training for each dataset with consistent training hyperparameters.",
            "Evaluated cross-dataset generalization by testing models trained on one dataset across the remaining 10, identifying the FLAME dataset as the most optimal for generalization with 73% average accuracy and an F1 score of 0.82."
        ],
        "projectLink": "https://github.com/danishb7/Wildfire-Detection-with-ResNet-50",
        "linkLabel": "View source on GitHub ↗"
    },
    "etf": {
        "title": "ETF Investment Advisor",
        "timeline": "Personal project · Python · FastAPI · SQLAlchemy · Docker",
        "details": [
            "Built a local-first application with a FastAPI backend and SQLAlchemy/SQLite persistence for investor profiles, portfolios, watchlists, and saved investment simulations.",
            "Integrated market data, macroeconomic indicators, and news sentiment, with cached responses and rule-based scoring.",
            "Implemented API workflows for recommendations, portfolio tracking, historical backtests, and forward simulations.",
            "Added automated backend tests using a temporary database and mocked external data sources. The GitHub Actions workflow enforces an 80% coverage threshold."
        ],
        "projectLink": "https://github.com/danishb7/etf-investment-advisor",
        "linkLabel": "View source on GitHub ↗"
    },
    "codepal": {
        "title": "CodePal — Developer Project Reports",
        "timeline": "Personal project · Python · FastAPI · OpenAI API",
        "details": [
            "Built a local developer tool that scans a project folder or accepts a file upload and produces a structured Markdown report.",
            "Implemented FastAPI routes for report generation and download, with server-side model selection and validation of user inputs.",
            "Separated file collection, AI integration, report writing, and configuration into dedicated modules; API credentials remain on the server.",
            "Added pytest coverage for the web routes, file loader, report generation, configuration, and API integration."
        ],
        "projectLink": "https://github.com/danishb7/dev-navigator",
        "linkLabel": "View source on GitHub ↗"
    },
    "project1": {
        "title": "Text-CRS: Enhancing Certified Robustness for Adversarial Text Classification",
        "timeline": "Jan 2025 - Apr 2025",
        "details": [
            "Developed and extended the Text-CRS framework, achieving 84.5% accuracy (BERT) and 74.1% accuracy (LSTM) on the AGNews dataset after conducting word-level attacks (synonym substitution) to evaluate model robustness.",
            "Constructed smoothed classifiers and improved adversarial robustness by 5% through noise injection and hyperparameter tuning.",
            "Conducted evaluations using PyTorch, TextAttack, and NLP datasets (AG News, IMDB)."
        ],
        "projectLink": "https://github.com/danishb7/Text-CRS_NTS_Final",
        "linkLabel": "View source on GitHub ↗"
    },
    "project4": {
        "title": "Statistical Analysis of Premier League Dataset using SAS",
        "timeline": "Oct 2023 - Dec 2023",
        "details": [
            "Analyzed Premier League dataset (1993-2023) using SAS, processing 12,000+ matches and generated 5 supplementary datasets with 6 new attributes, expanding the original dataset by 75% for deeper analytical insights.",
            "Utilized correlation and regression techniques, achieving 90.48% accuracy in predicting future results."
        ],
        "projectLink": "https://github.com/danishb7/Premier-League-1993-2023",
        "linkLabel": "View source on GitHub ↗"
    }
};

const publicationData = {
    pub1: {
        title: "Fire and Smoke Datasets in 20 Years: An In-depth Review",
        // journal: "",
        date: "March 2025",
        // authors: "",
        abstract: "Fire and smoke phenomena pose a significant threat to the natural environment, ecosystems, and global economy, as well as human lives and wildlife. In this particular circumstance, there is a demand for more sophisticated and advanced technologies to implement an effective strategy for early detection, real-time monitoring, and minimizing the overall impacts of fires on ecological balance and public safety. Recently, the rapid advancement of Artificial Intelligence (AI) and Computer Vision (CV) frameworks has substantially revolutionized the momentum for developing efficient fire management systems. However, these systems extensively rely on the availability of adequate and high-quality fire and smoke data to create proficient Machine Learning (ML) methods for various tasks, such as detection and monitoring. Although fire and smoke datasets play a critical role in training, evaluating, and testing advanced Deep Learning (DL) models, a comprehensive review of the existing datasets is still unexplored. For this purpose, we provide an in-depth review to systematically analyze and evaluate fire and smoke datasets collected over the past 20 years. We investigate the characteristics of each dataset, including type, size, format, collection methods, and geographical diversities. We also review and highlight the unique features of each dataset, such as imaging modalities (RGB, thermal, infrared) and their applicability for different fire management tasks (classification, segmentation, detection). Furthermore, we summarize the strengths and weaknesses of each dataset and discuss their potential for advancing research and technology in fire management. Ultimately, we conduct extensive experimental analyses across different datasets using several state-of-the-art algorithms, such as ResNet-50, DeepLab-V3, and YoloV8.",
        paperLink: "https://www.sciencedirect.com/science/article/pii/S266682702500146X"
    }
    // Add more publications as needed
};
