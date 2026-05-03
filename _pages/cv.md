---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Research Scientist and Medical Doctor building and evaluating large language models for high-stakes settings. My work spans post-training, alignment, adversarial evaluation, uncertainty/calibration, and production deployment of LLM systems. I have led end-to-end development of medical LLMs, safety evaluation pipelines, and an Epic-integrated clinical agent used by 3000+ clinicians across 150,000+ clinical interactions. I bring a rare combination of clinical expertise, research leadership, and deep systems engineering experience across training, inference, and large-scale software infrastructure. I am especially interested in trustworthy reasoning, scalable oversight, and robust deployment of frontier models in real-world environments.

Education
======
* **Ph.D. in Computer Science**, Université Catholique de Louvain, Brussels, 2026
  * Defended March 2026
* **Doctor of Medicine (M.D.)**, Université Catholique de Louvain, Brussels, 2023
* **M.S. in Computer Science**, Université d'Avignon, France, 2014
* **B.S. in Computer Science**, Université d'Avignon, France, 2012

Experience
======

**Postdoctoral Researcher** — *Stanford University* (Remote / San Francisco, CA) &nbsp;&middot;&nbsp; April 2026 – present
* Designing and implementing medical benchmarks for LLMs
* Red teaming multimodal frontier models with adversarial attacks

**Research Scientist** — *Université Catholique de Louvain* (Brussels) &nbsp;&middot;&nbsp; October 2023 – March 2026
* Trained **Internist-7B**, a 7B-parameter medical LLM based on Mistral; first model of its size to surpass **60%** on MedQA. Public release: [internistai/base-7b-v0.2](https://huggingface.co/internistai/base-7b-v0.2)
* Designed and implemented **alignment and safety evaluation pipelines** including automated adversarial red teaming, hallucination suppression, self-critique, and metacognitive reasoning assessment for clinical reliability
* Led end-to-end deployment of a **clinical agentic system** integrated with **Epic EHR** — model serving, inference orchestration, clinician-facing UI, safety guardrails, auditability, and monitoring; in production with **3000+ clinical users** across **150,000+ clinical interactions**. Press: [RTL Info](https://www.rtl.be/page-videos/les-cliniques-saint-luc-utilisent-une-ia-pour-acceder-aux-donnees-des-patients/2025-07-31/video/758455)
* Visiting Researcher, **Harvard University (LiGHT)** — evaluated alignment techniques for clinical LLMs with practicing clinicians as part of the [MOOVE](https://jointhemoove.org/) initiative
* Visiting Researcher, **Cleveland Clinic** — trained Qwen-based models with **GRPO** for safe de-identification of clinical documents while preserving semantic fidelity

**Machine Learning Scientist (Consultant)** — *DeepSky* (Remote / San Francisco, CA) &nbsp;&middot;&nbsp; August – September 2023
* Designed and curated a dataset for a foundational medical generative text model
* Performed training with AWS SageMaker and PyTorch

**Medical Doctor Clerkships** — *Cliniques Universitaires Saint-Luc* (Brussels) &nbsp;&middot;&nbsp; 2021 – 2023
* Core rotations: Emergency Medicine, Nephrology, Geriatrics, Obstetrics, Pediatrics, General Surgery, Family Medicine, Pulmonology, Anesthesiology, Radiology
* Medical thesis on computer-assisted diagnosis of rare kidney diseases in emergency departments

**Lead Software Engineer** — *Tilted Phoques* (Brussels) &nbsp;&middot;&nbsp; 2017 – 2023
* Built large-scale systems in **C++**, **Python**, **C#**, AWS, and **Kubernetes**, including networking infrastructure handling tens of thousands of real-time concurrent users
* Low-level optimization in Assembly and security analysis using IDA Pro and WinDbg
* Authored open-source [Cyber Engine Tweaks](https://github.com/maximegmd/CyberEngineTweaks) — 4,600+ GitHub stars, 10M+ downloads

**Software Engineer** — *Bethesda Softworks* (Remote / Austin, TX) &nbsp;&middot;&nbsp; 2016 – 2017
* Designed an **anti-cheat** system from scratch in **C++**, **Assembly**, and Python for upcoming titles
* Built backend systems for cheat reports and analytics on AWS using microservices and Lambda; contributed to the open-source AWS C++ SDK
* Researched obfuscation, tamper detection, and code/memory integrity techniques

**Software Engineer** — *ZeniMax Online Studios* (Hunt Valley, MD) &nbsp;&middot;&nbsp; 2014 – 2016
* Designed **load-balancing systems** improving response time and capacity at the scale of **hundreds of thousands** of concurrent connections
* Low-level optimization across memory management, networking, I/O, threading, and lock-free data structures
* Built anti-cheat systems including server-side payload generation, data obfuscation, and debugger traps

Awards & Honors
======
* **2025** — Senior Area Chair Highlight, [ACL 2025](https://2024.aclweb.org/program/best_papers/#sac-awards)
* **2025** — *Nature Communications* feature
* **2025** — [Health Data Agency](https://www.hda.belgium.be/en) Grant (€70,000; PI)
* **2025** — FSR Fellowship (Special Research Fund, Belgium) — PhD scholarship
* **2023 – 2027** — FSL Fellowship (Saint-Luc Fund, Belgium) — PhD scholarship
* **2023** — 2nd place, Mistral AI Hackathon (RAISE Summit)

Skills
======
* **Alignment & Safety** — RLHF, scalable oversight, preference modeling, red teaming, interpretability workflows, adversarial robustness, uncertainty / calibration
* **Model Development** — Python, PyTorch, HuggingFace (transformers, TRL), Axolotl, CUDA, C++, Assembly
* **Evaluation & Benchmarking** — lm-eval-harness, custom clinical reasoning benchmarks, physician-in-the-loop evaluation pipelines
* **Infrastructure & Deployment** — vLLM, SGLang, Kubernetes, Docker, MLflow, Weights & Biases, Epic EHR integration

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
