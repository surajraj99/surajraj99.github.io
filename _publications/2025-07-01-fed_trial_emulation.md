---
title: "Federated target trial emulation using distributed observational data for treatment effect estimation"
collection: publications
permalink: /publication/2025-07-01-fed_trial_emulation
excerpt: ''
date: 2025-07-01
venue: 'npj Digital Medicine'
paperurl: 'https://doi.org/10.1038/s41746-025-01803-y'
citation: 'Li, H., Zang, C., Xu, Z. et al. Federated target trial emulation using distributed observational data for treatment effect estimation. npj Digit. Med. 8, 387 (2025). https://doi.org/10.1038/s41746-025-01803-y'
---

Target trial emulation (TTE) aims to estimate treatment effects by simulating randomized controlled trials using real-world observational data. Applying TTE across distributed datasets shows great promise in improving generalizability and power but is always infeasible due to privacy and data-sharing constraints. Here we propose a Federated Learning-based TTE framework, FL-TTE, that enables TTE across multiple sites without sharing patient-level data. FL-TTE incorporates federated protocol design, federated inverse probability of treatment weighting, and a federated Cox proportional hazards model to estimate time-to-event outcomes across heterogeneous data. We validated FL-TTE by emulating Sepsis trials using eICU and MIMIC-IV data from 192 hospitals, and Alzheimer’s trials using INSIGHT Network across five New York City health systems. FL-TTE produced less biased estimates than traditional meta-analysis methods when compared to pooled results and is theoretically supported. Our FL-TTE enables federated treatment effect estimation across distributed and heterogeneous data in a privacy-preserved way.