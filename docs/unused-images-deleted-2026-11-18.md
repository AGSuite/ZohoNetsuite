# Proposed unused image deletion manifest

- Audit date: 2026-11-18
- Proposed files: 592
- Potential space saving: 237.76 MB (249304226 bytes)
- Scope: image files under public/ with no filename or public-path reference in project source/content.
- Safety exclusions: dynamic Odoo app logos under public/images/odoo-apps/all/.
- Recovery: every deleted file was Git-tracked and can be restored from repository history.

## Summary by directory

| Directory | Files | Space (MB) |
|---|---:|---:|
| public/images/Dashboard | 77 | 38.74 |
| public/images/modules | 127 | 38.13 |
| public/images/Services | 86 | 35.77 |
| public/images/offices | 32 | 15.42 |
| public/images/offices images | 24 | 15.17 |
| public/images/netsuiteimages | 16 | 11.45 |
| public/images/zoho-services | 18 | 10.27 |
| public/images/Background | 15 | 9.92 |
| public/images/lap | 17 | 7.61 |
| public/images/zoho-dashboards | 15 | 7.22 |
| public/images/people | 27 | 7.14 |
| public/images/odoo-services/generated | 4 | 6.23 |
| public/images/netsuiteimages/background | 3 | 4.55 |
| public/images/odoo-services | 4 | 3.93 |
| public/images/aboutus | 13 | 3.62 |
| public/images/zohoimages | 12 | 3.25 |
| public/images/celebrations | 1 | 2.84 |
| public/images/assets | 3 | 2.55 |
| public/images/Events/Netsuite-event | 8 | 2.21 |
| public/images/ai | 9 | 2.06 |
| public/email | 4 | 1.35 |
| public/images/challenges | 2 | 1.31 |
| public/images | 16 | 1.27 |
| public/images/netsuiteimages/addons | 1 | 0.88 |
| public/images/key-capabilities | 1 | 0.68 |
| public/images/case-studies | 1 | 0.66 |
| public/images/netsuite-clients | 6 | 0.63 |
| public/images/blogs | 2 | 0.55 |
| public/images/office | 2 | 0.48 |
| public/images/team | 3 | 0.42 |
| public/images/netsuiteimages/solutions | 4 | 0.19 |
| public/images/industries | 2 | 0.18 |
| public | 7 | 0.17 |
| public/images/zoho logos | 4 | 0.17 |
| public/images/zoho-logos | 4 | 0.17 |
| public/images/netsuiteimages/netsuitelogos | 2 | 0.14 |
| public/images/Thankyouimg | 12 | 0.11 |
| public/images/zohoimages/zohologos | 1 | 0.1 |
| public/images/awards | 1 | 0.07 |
| public/email/img | 2 | 0.06 |
| public/images/zoho client images | 1 | 0.06 |
| public/images/Homeicons/Zohoffice | 1 | 0.02 |
| public/images/home | 1 | 0.01 |
| public/images/offices images/Print Online Calendar_files | 1 | 0.01 |

## Proposed files

| File | Size (KB) |
|---|---:|
| public/android-chrome-144x144.png | 27.4 |
| public/android-chrome-192x192.png | 6.6 |
| public/android-chrome-36x36.png | 27.4 |
| public/android-chrome-48x48.png | 27.4 |
| public/android-chrome-512x512.png | 27.4 |
| public/android-chrome-72x72.png | 27.4 |
| public/android-chrome-96x96.png | 27.4 |
| public/email/AGSLogo.gif | 1165.9 |
| public/email/agsuite_logo.png | 37.1 |
| public/email/img/partners-logo.png | 38.3 |
| public/email/img/thankyou.png | 26.9 |
| public/email/PartnerLogoGif.gif | 48.8 |
| public/email/PartnerLogoGif2.gif | 135.5 |
| public/images/aboutus/child66.png | 1528.7 |
| public/images/aboutus/child77.png | 1351.6 |
| public/images/aboutus/CTA3.webp | 39.7 |
| public/images/aboutus/download.webp | 18.9 |
| public/images/aboutus/heroimg0.webp | 45.8 |
| public/images/aboutus/heroimg2.webp | 45.5 |
| public/images/aboutus/mission2.webp | 80.6 |
| public/images/aboutus/mission3.webp | 76.6 |
| public/images/aboutus/niche2.webp | 48.8 |
| public/images/aboutus/Prescence.webp | 53.1 |
| public/images/aboutus/social.webp | 81 |
| public/images/aboutus/vision.webp | 50 |
| public/images/aboutus/zohodoor.jpg | 284.8 |
| public/images/agsuite_logo.png | 37.1 |
| public/images/ai/ask_natural_language.png | 600.8 |
| public/images/ai/easier_way_to_work.png | 606.9 |
| public/images/ai/integration_banking_open_finance.jpg | 43.4 |
| public/images/ai/integration_crm_integration.jpg | 52.1 |
| public/images/ai/integration_ecom_connectors.jpg | 53.6 |
| public/images/ai/integration_hrms_payroll.jpg | 44.8 |
| public/images/ai/integration_payment_gateway.jpg | 50.4 |
| public/images/ai/integration_wms_logistics.jpg | 73.4 |
| public/images/ai/trust_every_answer.png | 587.9 |
| public/images/assets/localization-center.png | 1317.2 |
| public/images/assets/localization-ring.png.png | 1292.2 |
| public/images/assets/salice.png | 2.4 |
| public/images/awards/Partner of the Year.png | 67 |
| public/images/Background/amazon_cta_bg.png | 569.5 |
| public/images/Background/bghomepage.webp | 35.3 |
| public/images/Background/data_backup_cta_bg.png | 676.1 |
| public/images/Background/footerformbg.webp | 124.1 |
| public/images/Background/herobg.jpg | 767.7 |
| public/images/Background/herobg1.png | 1213.4 |
| public/images/Background/herobg2.png | 1217 |
| public/images/Background/herobg3.png | 1179.5 |
| public/images/Background/herobg4.png | 668.7 |
| public/images/Background/magento_cta_bg.png | 700.2 |
| public/images/Background/NetsuiteERP.webp | 105 |
| public/images/Background/shopify_cta_bg.png | 644.1 |
| public/images/Background/smart_commission_cta_bg.png | 652.3 |
| public/images/Background/teambg3.png | 1573.1 |
| public/images/Background/teambg3.webp | 29 |
| public/images/blogs/sap-ecc-to-oracle-netsuite-migration.jpg | 281.6 |
| public/images/blogs/sap-ecc-to-oracle-netsuite-migration.webp | 281.6 |
| public/images/case-studies/cs_financial_services.png | 679.1 |
| public/images/celebrations/Colourful Diwali Photo collage (1).png | 2913.1 |
| public/images/challenges/ns_challenge_asc606.png | 682.1 |
| public/images/challenges/ns_challenge_subscription_billing.png | 654.4 |
| public/images/curved-dotted-line.svg | 0.6 |
| public/images/Dashboard/automated daily backup.png | 690.7 |
| public/images/Dashboard/automated_daily_backup.png | 690.7 |
| public/images/Dashboard/awards2.webp | 30.5 |
| public/images/Dashboard/candidate1.png | 984 |
| public/images/Dashboard/candidate2.png | 964.6 |
| public/images/Dashboard/candidate3.png | 1118.8 |
| public/images/Dashboard/candidate4.png | 45.8 |
| public/images/Dashboard/CRM Dashbaord 2 11zon.jpg | 80 |
| public/images/Dashboard/CRM Dashboard 11zon.jpg | 90.5 |
| public/images/Dashboard/data backup benefit daily backup.png | 736.5 |
| public/images/Dashboard/data backup benefit integration.png | 614.4 |
| public/images/Dashboard/data backup benefit mca compliance.png | 672.1 |
| public/images/Dashboard/embedded ai dashboard.png | 699.6 |
| public/images/Dashboard/embedded_ai_dashboard.png | 699.6 |
| public/images/Dashboard/ERP Dashboard 11zon.jpg | 82.1 |
| public/images/Dashboard/erp suite dashboard.png | 657.6 |
| public/images/Dashboard/erp_suite_dashboard.png | 657.6 |
| public/images/Dashboard/fixed asset management dashboard.png | 296.1 |
| public/images/Dashboard/innovation analytics dashboard.png | 784.6 |
| public/images/Dashboard/mca compliance illustration.png | 777.3 |
| public/images/Dashboard/mca compliance illustration.webp | 131.2 |
| public/images/Dashboard/mca rule3 compliance checklist.png | 635.1 |
| public/images/Dashboard/netsuite Ai dashboard copy.png | 524 |
| public/images/Dashboard/netsuite Ai dashboard enhanced.png | 422 |
| public/images/Dashboard/netsuite Ai dashboard enhanced-Photoroom.webp | 78.4 |
| public/images/Dashboard/netsuite automated transactions dashboard.png | 495.4 |
| public/images/Dashboard/netsuite data backup architecture realistic.png | 757.9 |
| public/images/Dashboard/netsuite data backup security realistic.png | 674.2 |
| public/images/Dashboard/NETSUITE ERP DASHBOARD copy.png | 1070.9 |
| public/images/Dashboard/netsuite erp dashboard hd.png | 1070.9 |
| public/images/Dashboard/netsuite erp dashboard hd.webp | 124.6 |
| public/images/Dashboard/netsuite erp dashboard realistic.png | 720.7 |
| public/images/Dashboard/netsuite executive erp dashboard.jpg | 576.5 |
| public/images/Dashboard/netsuite executive erp dashboard.webp | 92.6 |
| public/images/Dashboard/netsuite hero concept.png | 797 |
| public/images/Dashboard/netsuite hero nextai custom.png | 181.9 |
| public/images/Dashboard/netsuite hero nextai custom.webp | 107.2 |
| public/images/Dashboard/netsuite precision dashboard gemini.png | 511.9 |
| public/images/Dashboard/netsuite srp dashboard ui only.png | 540.3 |
| public/images/Dashboard/netsuite srp dashboard.png | 557 |
| public/images/Dashboard/netsuite srp white dashboard.png | 587.7 |
| public/images/Dashboard/netsuite srp widescreen pc dashboard.png | 593.5 |
| public/images/Dashboard/netsuite technical architecture.png | 642.7 |
| public/images/Dashboard/netsuite zoho integration.png | 969.3 |
| public/images/Dashboard/netsuite_automated_transactions_dashboard.png | 495.4 |
| public/images/Dashboard/netsuite_data_backup_architecture_realistic.png | 757.9 |
| public/images/Dashboard/netsuite_data_backup_security_realistic.png | 674.2 |
| public/images/Dashboard/netsuite_erp_dashboard_hd.png | 1070.9 |
| public/images/Dashboard/netsuite_erp_dashboard_hd.webp | 124.6 |
| public/images/Dashboard/netsuite_executive_erp_dashboard.jpg | 576.5 |
| public/images/Dashboard/netsuite_hero_concept.png | 797 |
| public/images/Dashboard/netsuite_hero_nextai_custom.png | 181.9 |
| public/images/Dashboard/netsuite_hero_nextai_custom.webp | 107.2 |
| public/images/Dashboard/netsuite_precision_dashboard_gemini.png | 511.9 |
| public/images/Dashboard/netsuite_srp_dashboard.png | 557 |
| public/images/Dashboard/netsuite_srp_dashboard_ui_only.png | 540.3 |
| public/images/Dashboard/netsuite_srp_white_dashboard.png | 587.7 |
| public/images/Dashboard/netsuite_zoho_integration.png | 969.3 |
| public/images/Dashboard/netsuitedash2.webp | 72.6 |
| public/images/Dashboard/Next AI Dashboard.jpeg | 483.8 |
| public/images/Dashboard/ns automation dash.png | 472 |
| public/images/Dashboard/ns global dash.png | 587.8 |
| public/images/Dashboard/ns management dash.png | 499.2 |
| public/images/Dashboard/ns scaling dash.png | 465.5 |
| public/images/Dashboard/ns visibility dash.png | 539.9 |
| public/images/Dashboard/ns_global_dash.png | 587.8 |
| public/images/Dashboard/ns_management_dash.png | 499.2 |
| public/images/Dashboard/odoo_command_dashboard.png | 243.1 |
| public/images/Dashboard/oracle infrastructure dashboard.png | 789.7 |
| public/images/Dashboard/Presence.webp | 37.4 |
| public/images/Dashboard/suitecommerce 2 dashbaord.jpg | 69.9 |
| public/images/Dashboard/suitecommerce dashboard new.png | 429.7 |
| public/images/Dashboard/suitesuccess 2 dashboard.jpg | 72.5 |
| public/images/Dashboard/suitesuccess dashboard new.png | 519.8 |
| public/images/Dashboard/why agsuite.jpg | 52 |
| public/images/Dashboard/zoho workplace dashboard.png | 530.5 |
| public/images/Dashboard/zoho_workplace_dashboard.png | 530.5 |
| public/images/Events/Netsuite-event/1773125723834.jpg | 177.1 |
| public/images/Events/Netsuite-event/1773125724026.jpg | 175.5 |
| public/images/Events/Netsuite-event/1773125724833.jpg | 299.9 |
| public/images/Events/Netsuite-event/1773125725442.jpg | 284.9 |
| public/images/Events/Netsuite-event/1773125727048.jpg | 336.2 |
| public/images/Events/Netsuite-event/1773125737757.jpg | 281.4 |
| public/images/Events/Netsuite-event/1773125738799.jpg | 314.7 |
| public/images/Events/Netsuite-event/1773125739587.jpg | 395.6 |
| public/images/facebook.png | 2.8 |
| public/images/facebook-icon.png | 2.8 |
| public/images/fb.png | 2.8 |
| public/images/home/netsuite_partner_logo.webp | 10.5 |
| public/images/Homeicons/Zohoffice/zoho.png | 23 |
| public/images/industries/logistics-means-transport-together-with-technological-futuristic-holograms (2)_11zon.jpg | 112.5 |
| public/images/industries/Packaging-compressed.webp | 71.3 |
| public/images/insta.png | 8.8 |
| public/images/instagram.png | 8.8 |
| public/images/instagram-icon.png | 8.8 |
| public/images/iso-27001-certified.png | 275.4 |
| public/images/key-capabilities/cap_unified.png | 699 |
| public/images/lap/ask_oracle_laptop_perfect_composite.png | 431.5 |
| public/images/lap/ask_oracle_laptop_ultra_hd.png | 685.3 |
| public/images/lap/ask_oracle_laptop_v2.jpg | 431.5 |
| public/images/lap/ask_oracle_widescreen_laptop_ai.png | 666.1 |
| public/images/lap/dt_ai_automation_1780919150772.png | 716 |
| public/images/lap/dt_erp_integration_1780919059545.png | 649.2 |
| public/images/lap/dt_process_automation_1780919088078.png | 676 |
| public/images/lap/lapbg.png | 1038.1 |
| public/images/lap/netsuite_ai_hero.webp | 104.9 |
| public/images/lap/netsuite_cfo_ai_dashboard.webp | 92 |
| public/images/lap/netsuite_final_cta_bg_hd.webp | 115.7 |
| public/images/lap/netsuite_module_showcase_hd.png | 659.3 |
| public/images/lap/netsuite_next_ai_laptop.webp | 57.2 |
| public/images/lap/netsuitelap.png | 229.5 |
| public/images/lap/netsuitelap3.jpg | 66 |
| public/images/lap/Next_AI_Dashboard_4k.png | 709 |
| public/images/lap/Next_AI_Dashboard_4k.webp | 469 |
| public/images/linkedin.png | 3.1 |
| public/images/linkedin-icon.png | 3.1 |
| public/images/modules/account modules.webp | 226 |
| public/images/modules/accounts payable custom.png | 672.3 |
| public/images/modules/accounts receivable custom.png | 657.5 |
| public/images/modules/acct accounts payable.png | 668.9 |
| public/images/modules/acct accounts receivable.png | 713.6 |
| public/images/modules/acct general ledger.png | 716.5 |
| public/images/modules/analytics augmented ai.png | 618.5 |
| public/images/modules/analytics collab.png | 768.3 |
| public/images/modules/analytics data prep.png | 667.6 |
| public/images/modules/analytics forecasting.png | 695 |
| public/images/modules/analytics mobile bi.png | 659.8 |
| public/images/modules/analytics visual analysis.webp | 103.2 |
| public/images/modules/analytics_visual_analysis.webp | 103.2 |
| public/images/modules/any module.webp | 41.7 |
| public/images/modules/any modules.webp | 77.9 |
| public/images/modules/audit reports.png | 729.5 |
| public/images/modules/benefit compliance.png | 724.4 |
| public/images/modules/benefit operations.png | 662.2 |
| public/images/modules/benefit reporting.png | 759.1 |
| public/images/modules/budgeting planning custom.webp | 69.6 |
| public/images/modules/budgeting_planning_custom.webp | 69.6 |
| public/images/modules/cat mod auth.svg | 0.6 |
| public/images/modules/cat mod cli.svg | 0.8 |
| public/images/modules/cat mod envs.svg | 0.6 |
| public/images/modules/cat mod events.svg | 0.8 |
| public/images/modules/cat mod gateway.svg | 0.9 |
| public/images/modules/cat mod logs.svg | 0.6 |
| public/images/modules/cat mod nosql.svg | 0.6 |
| public/images/modules/cat mod objects.svg | 0.8 |
| public/images/modules/cat mod scale.svg | 0.7 |
| public/images/modules/cat mod serverless.svg | 0.8 |
| public/images/modules/cat mod storage.svg | 0.5 |
| public/images/modules/cat mod zia.svg | 0.9 |
| public/images/modules/cat_mod_auth.svg | 0.6 |
| public/images/modules/cat_mod_cli.svg | 0.8 |
| public/images/modules/cat_mod_envs.svg | 0.6 |
| public/images/modules/cat_mod_events.svg | 0.8 |
| public/images/modules/cat_mod_gateway.svg | 0.9 |
| public/images/modules/cat_mod_logs.svg | 0.6 |
| public/images/modules/cat_mod_nosql.svg | 0.6 |
| public/images/modules/cat_mod_objects.svg | 0.8 |
| public/images/modules/cat_mod_scale.svg | 0.7 |
| public/images/modules/cat_mod_serverless.svg | 0.8 |
| public/images/modules/cat_mod_storage.svg | 0.5 |
| public/images/modules/cat_mod_zia.svg | 0.9 |
| public/images/modules/chat desk module.webp | 167.7 |
| public/images/modules/chatt mdoule.webp | 699.9 |
| public/images/modules/cost efficiency.png | 678.1 |
| public/images/modules/csm modules.webp | 21.6 |
| public/images/modules/dashboard module.webp | 74.4 |
| public/images/modules/dashbord module.webp | 21.7 |
| public/images/modules/eway bill.png | 757 |
| public/images/modules/expense management custom.png | 690.2 |
| public/images/modules/financial management.webp | 92.6 |
| public/images/modules/financial reporting custom.png | 674.6 |
| public/images/modules/financial_management.webp | 92.6 |
| public/images/modules/fixed assets custom.png | 536 |
| public/images/modules/gbm consolidation.png | 806.2 |
| public/images/modules/gbm fx revaluation.png | 637.8 |
| public/images/modules/gbm global reporting.png | 779 |
| public/images/modules/gbm global tax.png | 724.4 |
| public/images/modules/gbm intercompany.png | 719.5 |
| public/images/modules/gbm localization.png | 686.9 |
| public/images/modules/gbm multi currency.png | 797.4 |
| public/images/modules/gbm oneworld.png | 796.4 |
| public/images/modules/gbm payroll integration.png | 729.2 |
| public/images/modules/gbm subsidiary launch.png | 827.6 |
| public/images/modules/general ledger custom.png | 595.7 |
| public/images/modules/hr management.png | 731.1 |
| public/images/modules/intelligent automation.png | 674.7 |
| public/images/modules/inventory management.webp | 152.5 |
| public/images/modules/inventory_management.webp | 152.5 |
| public/images/modules/it mod application.svg | 0.6 |
| public/images/modules/it mod asset.svg | 1 |
| public/images/modules/it mod cloud.svg | 0.7 |
| public/images/modules/it mod endpoint.svg | 0.7 |
| public/images/modules/it mod identity.svg | 0.7 |
| public/images/modules/it mod net security.svg | 0.7 |
| public/images/modules/it mod operations.svg | 0.7 |
| public/images/modules/it mod patch.svg | 0.7 |
| public/images/modules/it mod remote.svg | 0.8 |
| public/images/modules/it mod security.svg | 0.6 |
| public/images/modules/it mod service.svg | 0.9 |
| public/images/modules/it mod strategic.svg | 0.6 |
| public/images/modules/it_mod_application.svg | 0.6 |
| public/images/modules/it_mod_asset.svg | 1 |
| public/images/modules/it_mod_cloud.svg | 0.7 |
| public/images/modules/it_mod_endpoint.svg | 0.7 |
| public/images/modules/it_mod_identity.svg | 0.7 |
| public/images/modules/it_mod_net_security.svg | 0.7 |
| public/images/modules/it_mod_operations.svg | 0.7 |
| public/images/modules/it_mod_patch.svg | 0.7 |
| public/images/modules/it_mod_remote.svg | 0.8 |
| public/images/modules/it_mod_security.svg | 0.6 |
| public/images/modules/it_mod_service.svg | 0.9 |
| public/images/modules/it_mod_strategic.svg | 0.6 |
| public/images/modules/managging together module.webp | 150.8 |
| public/images/modules/marketing automation.png | 718.9 |
| public/images/modules/mobile module.webp | 118.6 |
| public/images/modules/module8.webp | 52.9 |
| public/images/modules/multi currency custom.png | 636.9 |
| public/images/modules/ns accounts payable.png | 617.9 |
| public/images/modules/ns accounts receivable.png | 644.2 |
| public/images/modules/ns general ledger.png | 601.4 |
| public/images/modules/ns_accounts_receivable.png | 644.2 |
| public/images/modules/ns_general_ledger.png | 601.4 |
| public/images/modules/order management.webp | 98.4 |
| public/images/modules/order_management.webp | 98.4 |
| public/images/modules/period close custom.png | 644.7 |
| public/images/modules/project management.webp | 132.6 |
| public/images/modules/real time visibility.png | 723.6 |
| public/images/modules/revenue recognition custom.png | 516.5 |
| public/images/modules/sc manager approvals.png | 467.1 |
| public/images/modules/sc marketing engine.png | 702.6 |
| public/images/modules/sc mobile commerce.png | 735.2 |
| public/images/modules/sc multi tier plans.png | 507.1 |
| public/images/modules/sc rep self service.png | 599.6 |
| public/images/modules/sc split commissions.png | 469.6 |
| public/images/modules/sheet module.webp | 26.8 |
| public/images/modules/supply chain.png | 942.7 |
| public/images/modules/tcs calculation.png | 692.7 |
| public/images/modules/tds advanced.png | 709.7 |
| public/images/modules/unified platform.png | 795.5 |
| public/images/modules/warehouse management.webp | 242.7 |
| public/images/modules/workforce management.webp | 175.9 |
| public/images/modules/workforce_management.webp | 175.9 |
| public/images/modules/working module.webp | 41.7 |
| public/images/netsuite-clients/FINN-Logo1.jpg | 586.7 |
| public/images/netsuite-clients/image_13.png | 24.1 |
| public/images/netsuite-clients/kale.webp | 11.2 |
| public/images/netsuite-clients/prioritytire.webp | 8.4 |
| public/images/netsuite-clients/signal.webp | 2 |
| public/images/netsuite-clients/tsi-logo.webp | 12.6 |
| public/images/netsuiteimages/addons/addons_second.png | 897.7 |
| public/images/netsuiteimages/background/integration-image.png | 3651.9 |
| public/images/netsuiteimages/background/netsuitebg.webp | 229.2 |
| public/images/netsuiteimages/background/netsuite-expert-guidance.png | 782.6 |
| public/images/netsuiteimages/cargo_tracking_feature.png | 679.7 |
| public/images/netsuiteimages/carrier_3pl_benefit.png | 786.7 |
| public/images/netsuiteimages/carrier_portal_feature.png | 737.9 |
| public/images/netsuiteimages/dispatch_route_feature.png | 738.4 |
| public/images/netsuiteimages/fleet_asset_feature.png | 729.6 |
| public/images/netsuiteimages/fleet_cost_benefit.png | 743.6 |
| public/images/netsuiteimages/freight_billing_benefit.png | 730.6 |
| public/images/netsuiteimages/freight_rate_feature.png | 712.1 |
| public/images/netsuiteimages/lane_profitability_benefit.png | 668.2 |
| public/images/netsuiteimages/manufacturing_overview.png | 692.9 |
| public/images/netsuiteimages/mfg_inventory_benefit.png | 848.8 |
| public/images/netsuiteimages/mfg_prod_planning_benefit.png | 717.1 |
| public/images/netsuiteimages/mfg_quality_benefit.png | 689.9 |
| public/images/netsuiteimages/mfg_supply_chain_benefit.png | 713.3 |
| public/images/netsuiteimages/netsuitelogos/netsuitepartner.webp | 5.2 |
| public/images/netsuiteimages/netsuitelogos/oracle_netsuite_solution_provider_partner.png | 137.4 |
| public/images/netsuiteimages/solutions/NetsuiteCRM.webp | 48.7 |
| public/images/netsuiteimages/solutions/NetsuiteERP.webp | 65.1 |
| public/images/netsuiteimages/solutions/NetsuiteGlobal.webp | 49.2 |
| public/images/netsuiteimages/solutions/NetsuiteSRP.webp | 33.6 |
| public/images/netsuiteimages/tms_erp_benefit.png | 675.2 |
| public/images/netsuiteimages/transport_overview.png | 858.8 |
| public/images/odoo-services/generated/odoo-consulting.png | 1629.2 |
| public/images/odoo-services/generated/odoo-data-migration.png | 1465.8 |
| public/images/odoo-services/generated/odoo-training-adoption.png | 1730.2 |
| public/images/odoo-services/generated/odoo-version-upgrade.png | 1558.9 |
| public/images/odoo-services/odoo-customization-dashboard.png | 922.9 |
| public/images/odoo-services/odoo-implementation-dashboard.png | 1064.2 |
| public/images/odoo-services/odoo-integration-dashboard.png | 1068.1 |
| public/images/odoo-services/odoo-managed-support-dashboard.png | 969.7 |
| public/images/office/main conference.webp | 349.7 |
| public/images/office/main office.webp | 143.1 |
| public/images/offices images/bangalore_city.png | 1121.2 |
| public/images/offices images/bangalore_hq.png | 894.7 |
| public/images/offices images/banglore.webp | 15.4 |
| public/images/offices images/florida.webp | 18.5 |
| public/images/offices images/florida_city.png | 913.4 |
| public/images/offices images/florida_hq.png | 852.1 |
| public/images/offices images/gurgaon.webp | 17 |
| public/images/offices images/gurugram_city.png | 1024.3 |
| public/images/offices images/gurugram_hq.png | 884.3 |
| public/images/offices images/hyderabad_city.png | 942.9 |
| public/images/offices images/hyderabad_hq.png | 869.4 |
| public/images/offices images/hydrabad.webp | 13.1 |
| public/images/offices images/mumbai.webp | 37.4 |
| public/images/offices images/mumbai_city.png | 948.4 |
| public/images/offices images/mumbai_hq.png | 859.1 |
| public/images/offices images/Print Online Calendar_files/calendarlabs-logo.svg | 7 |
| public/images/offices images/pune.webp | 127.6 |
| public/images/offices images/pune_city.png | 976.3 |
| public/images/offices images/pune_hq.png | 923.6 |
| public/images/offices images/udaipur.jpg | 12.6 |
| public/images/offices images/udaipur_city.png | 940.4 |
| public/images/offices images/udaipur_hq.png | 867.9 |
| public/images/offices images/uk.webp | 14.2 |
| public/images/offices images/uk_city.png | 1068.3 |
| public/images/offices images/uk_hq.png | 1187.6 |
| public/images/offices/bangalore_city.png | 1121.2 |
| public/images/offices/bangalore_hq.png | 894.7 |
| public/images/offices/bangalore_hq.webp | 33 |
| public/images/offices/banglore.webp | 15.4 |
| public/images/offices/florida.webp | 18.5 |
| public/images/offices/florida_city.png | 913.4 |
| public/images/offices/florida_hq.png | 852.1 |
| public/images/offices/florida_hq.webp | 30.1 |
| public/images/offices/gurgaon.webp | 17 |
| public/images/offices/gurugram_city.png | 1024.3 |
| public/images/offices/gurugram_hq.png | 884.3 |
| public/images/offices/gurugram_hq.webp | 28.8 |
| public/images/offices/hyderabad_city.png | 942.9 |
| public/images/offices/hyderabad_hq.png | 869.4 |
| public/images/offices/hyderabad_hq.webp | 29.7 |
| public/images/offices/hydrabad.webp | 13.1 |
| public/images/offices/mumbai.webp | 37.4 |
| public/images/offices/mumbai_city.png | 948.4 |
| public/images/offices/mumbai_hq.png | 859.1 |
| public/images/offices/mumbai_hq.webp | 26.2 |
| public/images/offices/pune.webp | 127.6 |
| public/images/offices/pune_city.png | 976.3 |
| public/images/offices/pune_hq.png | 923.6 |
| public/images/offices/pune_hq.webp | 33 |
| public/images/offices/udaipur.jpg | 12.6 |
| public/images/offices/udaipur_city.png | 940.4 |
| public/images/offices/udaipur_hq.png | 867.9 |
| public/images/offices/udaipur_hq.webp | 28.2 |
| public/images/offices/uk.webp | 14.2 |
| public/images/offices/uk_city.png | 1068.3 |
| public/images/offices/uk_hq.png | 1187.6 |
| public/images/offices/uk_hq.webp | 50.4 |
| public/images/people/Ankur.jpg | 4.2 |
| public/images/people/mayuri mam.png | 83.3 |
| public/images/people/mayuri.webp | 37.6 |
| public/images/people/netsuite_smart_commission.png | 667.4 |
| public/images/people/netsuite_white_commission_dashboard.png | 543 |
| public/images/people/nikhil_jain.png | 82.7 |
| public/images/people/odoo_team_collaboration_customization.jpg | 282.3 |
| public/images/people/Rajat_v2.png | 395.4 |
| public/images/people/Shailesh.jpg | 108.2 |
| public/images/people/zoho_catalyst_benefit_code.svg | 4.6 |
| public/images/people/zoho_catalyst_benefit_pricing.svg | 3.1 |
| public/images/people/zoho_catalyst_benefit_reliability.svg | 3.2 |
| public/images/people/zoho_catalyst_benefit_speed.svg | 3 |
| public/images/people/zoho_crm_hero.png | 765.2 |
| public/images/people/zoho_expense_benefit_reimbursement.png | 642.7 |
| public/images/people/zoho_expense_benefit_reporting.png | 809.9 |
| public/images/people/zoho_expense_benefit_travel.png | 760.7 |
| public/images/people/zoho_expense_benefit_visibility.png | 654.8 |
| public/images/people/zoho_fsm_hero.svg | 13.3 |
| public/images/people/zoho_it_mgmt_benefit_proactive.svg | 2.7 |
| public/images/people/zoho_it_mgmt_benefit_roi.svg | 2 |
| public/images/people/zoho_it_mgmt_benefit_security.svg | 2.8 |
| public/images/people/zoho_it_mgmt_benefit_unified.svg | 2.2 |
| public/images/people/zoho_it_mgmt_hero.svg | 4.9 |
| public/images/people/zoho_one_benefit_1.jpg | 720.7 |
| public/images/people/zoho_one_benefit_1_v2.jpg | 699.5 |
| public/images/people/zoho_salesiq_hero.svg | 13.3 |
| public/images/Services/integrationservices.webp | 76.5 |
| public/images/Services/lowcodeservices.webp | 31.4 |
| public/images/Services/netsuite hero people.png | 822.1 |
| public/images/Services/netsuite hero right.png | 815.3 |
| public/images/Services/netsuite hero v2.png | 891.9 |
| public/images/Services/netsuite intro left.png | 784.7 |
| public/images/Services/netsuite_hero_right.png | 815.3 |
| public/images/Services/ns ai digital transformation.png | 859.3 |
| public/images/Services/ns ai integration services.png | 1070.5 |
| public/images/Services/ns ai low code development.png | 919.4 |
| public/images/Services/ns ai managed services.png | 1050.4 |
| public/images/Services/ns ai training services.png | 919 |
| public/images/Services/ns digital transformation.png | 527.6 |
| public/images/Services/ns integration services.png | 472.2 |
| public/images/Services/ns low code development.png | 581.1 |
| public/images/Services/ns managed services.png | 494.8 |
| public/images/Services/ns service digital transformation dash.png | 142.6 |
| public/images/Services/ns service digital transformation new.png | 665.9 |
| public/images/Services/ns service digital transformation new.webp | 72.1 |
| public/images/Services/ns service digital transformation.png | 665.9 |
| public/images/Services/ns service integration dash.png | 128.9 |
| public/images/Services/ns service integration new.png | 663.8 |
| public/images/Services/ns service integration new.webp | 85.9 |
| public/images/Services/ns service integration.png | 663.8 |
| public/images/Services/ns service low code dash.png | 99.1 |
| public/images/Services/ns service low code new.png | 793.7 |
| public/images/Services/ns service low code new.webp | 135.7 |
| public/images/Services/ns service low code.png | 793.7 |
| public/images/Services/ns service managed dash.png | 76.3 |
| public/images/Services/ns service managed new.png | 703.5 |
| public/images/Services/ns service managed new.webp | 96.3 |
| public/images/Services/ns service managed.png | 703.5 |
| public/images/Services/ns service training dash.png | 123.4 |
| public/images/Services/ns service training new.png | 732.5 |
| public/images/Services/ns service training.png | 732.5 |
| public/images/Services/ns training services.png | 518.2 |
| public/images/Services/ns_ai_digital_transformation.png | 859.3 |
| public/images/Services/ns_ai_integration_services.png | 1070.5 |
| public/images/Services/ns_ai_training_services.png | 919 |
| public/images/Services/ns_service_digital_transformation.png | 665.9 |
| public/images/Services/ns_service_digital_transformation_dash.png | 142.6 |
| public/images/Services/ns_service_integration.png | 663.8 |
| public/images/Services/ns_service_integration_dash.png | 128.9 |
| public/images/Services/ns_service_low_code.png | 793.7 |
| public/images/Services/ns_service_low_code_dash.png | 99.1 |
| public/images/Services/ns_service_managed.png | 703.5 |
| public/images/Services/ns_service_managed_dash.png | 76.3 |
| public/images/Services/ns_service_training_dash.png | 123.4 |
| public/images/Services/trainingservices.webp | 122.9 |
| public/images/Services/zoho digital transformation overview.png | 767.3 |
| public/images/Services/zoho integration services overview.png | 702.6 |
| public/images/Services/zoho low code hero.png | 765.9 |
| public/images/Services/zoho low code mobile.png | 652.3 |
| public/images/Services/zoho srv digital trans dash.png | 158.4 |
| public/images/Services/zoho srv digital trans new.jpg | 97.2 |
| public/images/Services/zoho srv digital trans new2.png | 186.4 |
| public/images/Services/zoho srv integration dash.png | 128.9 |
| public/images/Services/zoho srv integration new.jpg | 92.7 |
| public/images/Services/zoho srv integration new2.png | 128.3 |
| public/images/Services/zoho srv low code dash.png | 94 |
| public/images/Services/zoho srv low code new.jpg | 80.7 |
| public/images/Services/zoho srv low code new2.png | 112.9 |
| public/images/Services/zoho srv low code office.png | 793.1 |
| public/images/Services/zoho srv managed dash.png | 76.3 |
| public/images/Services/zoho srv managed new.jpg | 84.6 |
| public/images/Services/zoho srv managed new2.png | 131.6 |
| public/images/Services/zoho srv training dash.png | 123.4 |
| public/images/Services/zoho srv training new.jpg | 111.7 |
| public/images/Services/zoho srv training new2.png | 147.7 |
| public/images/Services/zoho srv training office.png | 731.7 |
| public/images/Services/zoho success architecture.png | 687.6 |
| public/images/Services/zoho training hero.png | 734.9 |
| public/images/Services/zoho training session.png | 724.2 |
| public/images/Services/zoho_digital_transformation_overview.png | 767.3 |
| public/images/Services/zoho_srv_digital_trans_dash.png | 158.4 |
| public/images/Services/zoho_srv_digital_trans_new.jpg | 97.2 |
| public/images/Services/zoho_srv_digital_trans_new2.png | 186.4 |
| public/images/Services/zoho_srv_integration_dash.png | 128.9 |
| public/images/Services/zoho_srv_integration_new2.png | 128.3 |
| public/images/Services/zoho_srv_low_code_dash.png | 94 |
| public/images/Services/zoho_srv_low_code_new2.png | 112.9 |
| public/images/Services/zoho_srv_managed_dash.png | 76.3 |
| public/images/Services/zoho_srv_managed_new.jpg | 84.6 |
| public/images/Services/zoho_srv_training_dash.png | 123.4 |
| public/images/Services/zoho_srv_training_new.jpg | 111.7 |
| public/images/Services/zoho_srv_training_new2.png | 147.7 |
| public/images/team/team photo 1.jpg | 181.2 |
| public/images/team/team photo 2.webp | 100.6 |
| public/images/team/team photo.webp | 146.7 |
| public/images/thankyou.png | 26.9 |
| public/images/Thankyouimg/agsuite_logo.png | 37.1 |
| public/images/Thankyouimg/facebook.png | 2.8 |
| public/images/Thankyouimg/facebook-icon.png | 2.8 |
| public/images/Thankyouimg/fb.png | 2.8 |
| public/images/Thankyouimg/insta.png | 8.8 |
| public/images/Thankyouimg/instagram.png | 8.8 |
| public/images/Thankyouimg/instagram-icon.png | 8.8 |
| public/images/Thankyouimg/linkedin.png | 3.1 |
| public/images/Thankyouimg/linkedin-icon.png | 3.1 |
| public/images/Thankyouimg/thankyou.png | 26.9 |
| public/images/Thankyouimg/twitter.png | 4.6 |
| public/images/Thankyouimg/twitter-icon.png | 4.6 |
| public/images/twitter.png | 4.6 |
| public/images/twitter-icon.png | 4.6 |
| public/images/zoho client images/rentopia.png | 62 |
| public/images/zoho logos/zoho premium.png | 101.6 |
| public/images/zoho logos/zoho sheets logo.png | 2.1 |
| public/images/zoho logos/zoho-erp-logo.png | 42.4 |
| public/images/zoho logos/zoho-logo.png | 23 |
| public/images/zoho_suite_graphic.png | 453 |
| public/images/zoho_suite_graphic_v2.png | 453 |
| public/images/zoho-dashboards/Zoho_dashboard_UI_UX_design_2K_202607021312.jpeg | 932.1 |
| public/images/zoho-dashboards/zoho-catalyst-dashboard.svg | 7.5 |
| public/images/zoho-dashboards/zoho-creator-new-dashboard.png | 549 |
| public/images/zoho-dashboards/zoho-crm-new-dashboard.png | 686.7 |
| public/images/zoho-dashboards/zoho-erp-ai.png | 622.1 |
| public/images/zoho-dashboards/zoho-erp-new-dashboard.png | 574.2 |
| public/images/zoho-dashboards/zoho-it-mgmt-dashboard.jpg | 252.8 |
| public/images/zoho-dashboards/zoho-it-mgmt-dashboard.svg | 5.6 |
| public/images/zoho-dashboards/zoho-it-mgmt-dashboard.webp | 252.8 |
| public/images/zoho-dashboards/zoho-one-dashboard.png | 563.9 |
| public/images/zoho-dashboards/zoho-one-welcome-dashboard.png | 598.3 |
| public/images/zoho-dashboards/zoho-people-new-dashboard.png | 550 |
| public/images/zoho-dashboards/zoho-people-v3-dashboard.png | 550 |
| public/images/zoho-dashboards/zoho-projects-dashboard.png | 622.1 |
| public/images/zoho-dashboards/zoho-projects-updated-dashboard.png | 622.1 |
| public/images/zohoimages/zoho implementation.png | 615.1 |
| public/images/zohoimages/zoho integration.png | 629.3 |
| public/images/zohoimages/zoho_cap_ai_zia.jpg | 218.7 |
| public/images/zohoimages/zoho_cap_ai_zia_dash.png | 62.5 |
| public/images/zohoimages/zoho_cap_ai_zia_new.png | 112.9 |
| public/images/zohoimages/zoho_cap_global.jpg | 135.6 |
| public/images/zohoimages/zoho_cap_global_new.png | 76 |
| public/images/zohoimages/zoho_cap_integration_new.png | 51.9 |
| public/images/zohoimages/zoho_cap_unified_new.png | 57.1 |
| public/images/zohoimages/zoho_cap_workflows_dash.png | 100.1 |
| public/images/zohoimages/zoho_implementation.png | 615.1 |
| public/images/zohoimages/zohointegration.png | 649.6 |
| public/images/zohoimages/zohologos/zohopremium.png | 101.6 |
| public/images/zoho-logos/zoho premium.png | 101.6 |
| public/images/zoho-logos/zoho sheets logo.png | 2.1 |
| public/images/zoho-logos/zoho-erp-logo.png | 42.4 |
| public/images/zoho-logos/zoho-logo.png | 23 |
| public/images/zoho-services/srv_digital_transformation.png | 880.4 |
| public/images/zoho-services/srv_digital_transformation_v2.png | 628.7 |
| public/images/zoho-services/srv_digital_transformation_v3.png | 647.4 |
| public/images/zoho-services/srv_digital_transformation_v4.png | 647.4 |
| public/images/zoho-services/srv_digital_transformation_zoho.png | 880.4 |
| public/images/zoho-services/srv_integration.png | 731.1 |
| public/images/zoho-services/srv_integration_v2.png | 924.1 |
| public/images/zoho-services/srv_integration_v3.png | 743.1 |
| public/images/zoho-services/srv_integration_v4.png | 743.1 |
| public/images/zoho-services/srv_low_code_v2.png | 746.5 |
| public/images/zoho-services/srv_low_code_v3.webp | 79.1 |
| public/images/zoho-services/srv_low_code_v4.webp | 79.1 |
| public/images/zoho-services/srv_managed_services_zoho.png | 828.6 |
| public/images/zoho-services/srv_managed_v3.png | 91.4 |
| public/images/zoho-services/srv_training.png | 781.3 |
| public/images/zoho-services/srv_training_v2.png | 785.2 |
| public/images/zoho-services/srv_training_v3.png | 147.7 |
| public/images/zoho-services/srv_training_v4.png | 147.7 |
