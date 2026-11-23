/* Able Accessibility Widget 1.7.0 | MIT | No external dependencies */
(() => {
  'use strict';
  if (window.AccessibleVisitorToolkit) return;
  const script = document.currentScript;
  const STORAGE = 'avt-settings-v1';
  const defaults = { language: 'auto', fontSize: 100, contrast: false, grayscale: false, links: false, spacing: false, motion: false, guide: false, captions: true, visualAlerts: true, transcript: true, captionLanguage: 'auto', captionSize: 'medium', captionContrast: 'high', displayMode: 'floating', sidebarSide: 'right' };
  const ar = { open:'إعدادات إمكانية الوصول',title:'إعدادات إمكانية الوصول',close:'إغلاق إعدادات إمكانية الوصول',language:'لغة الواجهة',auto:'تلقائي',arabic:'العربية',english:'English',font:'حجم النص',decrease:'تصغير حجم النص',increase:'تكبير حجم النص',resetFont:'استعادة حجم النص',contrast:'تباين عالٍ',grayscale:'تدرّج رمادي',links:'تمييز الروابط',spacing:'تباعد النص',motion:'تقليل الحركة',guide:'دليل القراءة',reset:'إعادة ضبط جميع الإعدادات',note:'هذه الأدوات تساعد في التصفح ولا تضمن امتثال الموقع لمعايير WCAG.',status:'تم تحديث الإعدادات',percent:'حجم النص الحالي',speech:'القراءة الصوتية',readPage:'اقرأ محتوى الصفحة',readSelection:'اقرأ النص المحدد',pause:'إيقاف مؤقت',resume:'متابعة القراءة',stop:'إيقاف القراءة',speechIdle:'جاهز للقراءة',speechPlaying:'تجري القراءة',speechPaused:'القراءة متوقفة مؤقتاً',speechUnsupported:'المتصفح لا يدعم القراءة الصوتية',speechEmpty:'لا يوجد نص قابل للقراءة',speechSelect:'حدد نصاً في الصفحة ثم افتح الأداة واضغط قراءة النص المحدد',speechError:'تعذرت القراءة الصوتية. تحقق من توفر صوت مناسب باللغة المطلوبة',speechHint:'تعتمد أصوات العربية والإنجليزية على المتصفح والنظام. القراءة الصوتية لا تحل محل قارئ الشاشة.',hearing:'إمكانية الوصول للصم وضعاف السمع',captions:'عرض الترجمات المصاحبة',visualAlerts:'تنبيهات مرئية',transcript:'عرض النصوص المكتوبة',captionLanguage:'لغة الترجمة',captionSize:'حجم الترجمة',captionContrast:'تباين الترجمة',sizeSmall:'صغير',sizeMedium:'متوسط',sizeLarge:'كبير',contrastHigh:'مرتفع',contrastDefault:'افتراضي',media:'الوسائط المتاحة',noneMedia:'لا توجد وسائط مدعومة في الصفحة',transcriptButton:'إظهار النص',transcriptClose:'إخفاء النص',noTranscript:'لا يتوفر نص مكتوب لهذه الوسائط',sign:'ترجمة لغة الإشارة',signUnavailable:'لا يتوفر فيديو بلغة الإشارة',contact:'التواصل كتابةً',contactUnavailable:'لم يوفر الموقع وسيلة تواصل نصية',live:'نص البث المباشر',liveWaiting:'بانتظار نصوص البث المباشر من مزود الخدمة',mediaCaptionMissing:'لم يوفر الموقع ملف ترجمة لهذه الوسائط',speechNote:'تتطلب الترجمة المباشرة ربط خدمة تفريغ الكلام بالنص؛ لا يلتقط هذا المكون الأصوات تلقائيًا.',alertTitle:'تنبيه مرئي',closeAlert:'إغلاق التنبيه',openMedia:'فتح الوسائط',back:'العودة',captionNotice:'تعمل خيارات الترجمة مع مسارات الترجمة التي يوفرها الموقع.',displayMode:'طريقة العرض',floating:'زر عائم',sidebar:'شريط جانبي ثابت',sidebarSide:'جهة الشريط',left:'يسار',right:'يمين',visualGroup:'الرؤية والقراءة',hearingGroup:'السمع والترجمة',speechGroup:'القراءة الصوتية',settingsGroup:'العرض واللغة',toggleSidebar:'فتح أو إغلاق الشريط الجانبي'};
  const en = { open:'Accessibility settings',title:'Accessibility settings',close:'Close accessibility settings',language:'Interface language',auto:'Automatic',arabic:'العربية',english:'English',font:'Text size',decrease:'Decrease text size',increase:'Increase text size',resetFont:'Reset text size',contrast:'High contrast',grayscale:'Grayscale',links:'Highlight links',spacing:'Text spacing',motion:'Reduce motion',guide:'Reading guide',reset:'Reset all settings',note:'These tools assist browsing but do not guarantee website WCAG conformance.',status:'Settings updated',percent:'Current text size',speech:'Read aloud',readPage:'Read page content',readSelection:'Read selected text',pause:'Pause',resume:'Resume',stop:'Stop',speechIdle:'Ready to read',speechPlaying:'Reading aloud',speechPaused:'Reading paused',speechUnsupported:'Text-to-speech is not supported by this browser',speechEmpty:'No readable text found',speechSelect:'Select text on the page, then open the widget and choose Read selected text',speechError:'Speech playback failed. Check available voices for the requested language',speechHint:'Arabic and English voices depend on your browser and operating system. Read aloud is not a replacement for a screen reader.',hearing:'Deaf and hard-of-hearing accessibility',captions:'Enable available captions',visualAlerts:'Visual notifications',transcript:'Show transcripts',captionLanguage:'Caption language',captionSize:'Caption text size',captionContrast:'Caption contrast',sizeSmall:'Small',sizeMedium:'Medium',sizeLarge:'Large',contrastHigh:'High',contrastDefault:'Default',media:'Available media',noneMedia:'No supported media on this page',transcriptButton:'Show transcript',transcriptClose:'Hide transcript',noTranscript:'No transcript supplied for this media',sign:'Sign-language interpretation',signUnavailable:'No sign-language video has been supplied',contact:'Contact by text',contactUnavailable:'The website has not configured a text contact method',live:'Live caption feed',liveWaiting:'Waiting for captions from the live caption provider',mediaCaptionMissing:'This media has no caption track supplied by the website',speechNote:'Live captions require a connected transcription provider; this widget does not capture or transcribe audio automatically.',alertTitle:'Visual notification',closeAlert:'Dismiss notification',openMedia:'Open media',back:'Back',captionNotice:'Caption controls work with caption tracks provided by the website.',displayMode:'Widget layout',floating:'Floating button',sidebar:'Fixed sidebar',sidebarSide:'Sidebar position',left:'Left',right:'Right',visualGroup:'Vision and reading',hearingGroup:'Hearing and captions',speechGroup:'Read aloud',settingsGroup:'Layout and language',toggleSidebar:'Toggle accessibility sidebar'};
  let settings = { ...defaults };
  try { const saved = JSON.parse(localStorage.getItem(STORAGE) || '{}'); for (const k of Object.keys(defaults)) if (Object.hasOwn(saved,k) && typeof saved[k] === typeof defaults[k]) settings[k] = saved[k]; } catch (_) {}
  settings.fontSize = Math.max(100, Math.min(200, Math.round(settings.fontSize / 10) * 10));
  if (settings.contrast && settings.grayscale) settings.grayscale=false;
  if (!['auto','ar','en'].includes(settings.language)) settings.language = 'auto';
  if (!['auto','ar','en'].includes(settings.captionLanguage)) settings.captionLanguage='auto';
  if (!['small','medium','large'].includes(settings.captionSize)) settings.captionSize='medium';
  if (!['high','default'].includes(settings.captionContrast)) settings.captionContrast='high';
  if (!['floating','sidebar'].includes(settings.displayMode)) settings.displayMode='floating';
  if (!['left','right'].includes(settings.sidebarSide)) settings.sidebarSide='right';
  if (script?.dataset.avtMode === 'sidebar' || script?.dataset.avtMode === 'floating') settings.displayMode=script.dataset.avtMode;
  if (script?.dataset.avtSide === 'left' || script?.dataset.avtSide === 'right') settings.sidebarSide=script.dataset.avtSide;
  const language = () => settings.language === 'auto' ? (/^ar\b/i.test(document.documentElement.lang) ? 'ar' : 'en') : settings.language;
  const tr = key => (language() === 'ar' ? ar : en)[key];
  const host = document.createElement('div'); host.id = 'accessible-visitor-toolkit';
  const shadow = host.attachShadow({mode:'open'});
  const style = document.createElement('style');
  style.textContent = `
    :host { all: initial; font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; font-size:16px; color-scheme:light; }
    *,*::before,*::after { box-sizing:border-box; }
    button,select { font:inherit; }
    button { cursor:pointer; }
    button:focus-visible,select:focus-visible { outline:3px solid #ffb21a; outline-offset:3px; }
    #launcher { position:fixed; bottom:20px; inset-inline-end:20px; right:20px; width:56px; height:56px; border:2px solid #fff; border-radius:50%; background:#102c61; color:#fff; box-shadow:0 4px 20px #0005; z-index:2147483645; display:grid; place-items:center; }
    #launcher svg { width:28px;height:28px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round; }
    dialog { width:min(400px,calc(100vw - 24px)); max-height:min(680px,calc(100dvh - 24px)); padding:0; border:2px solid #243b60; border-radius:16px; color:#12223e; background:#fff; box-shadow:0 12px 48px #0007; position:fixed; inset:auto 12px 12px auto; margin:0; overflow:auto; z-index:2147483646; }
    dialog::backdrop { background:rgba(0,0,0,.58); }
    .wrap { padding:18px; }
    .header { display:flex; gap:10px; justify-content:space-between; align-items:center; margin:-18px -18px 16px; padding:16px 18px; background:#f5f8ff; border-bottom:1px solid #c8d3e2; position:sticky; top:0; z-index:2; border-radius:14px 14px 0 0; }
    h2 { font-size:1.25rem; line-height:1.4; margin:0; }
    .close { min-width:44px; min-height:44px; border-radius:8px; background:#edf2f9; border:1px solid #789; color:#12223e; font-size:26px; }
    label,legend { font-size:1rem; font-weight:600; }
    select { width:100%; min-height:44px; border:2px solid #55667d; border-radius:7px; padding:8px; margin-top:7px; background:#fff; color:#172a46; }
    fieldset { margin:18px 0 12px; padding:12px; border:1px solid #7e8da2; border-radius:10px; }
    .fontcontrols { display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:10px; }
    .fontcontrols button { min-width:44px; min-height:44px; padding:7px; border-radius:8px; border:2px solid #294e87; background:#eaf2ff; color:#152c4b; }
    output { font-variant-numeric:tabular-nums; font-weight:700; }
    .toggles { display:grid; grid-template-columns:1fr 1fr; gap:9px; }
    .toggle { display:flex; flex-direction:column; gap:8px; justify-content:space-between; min-height:68px; border:2px solid #b7c4d5; border-radius:9px; background:#f7f9fc; color:#12223e; text-align:start; padding:12px; font-size:.95rem; font-weight:600; }
    .toggle[aria-pressed="true"] { border-color:#123f87; background:#dae9ff; }
    .toggle[aria-pressed="true"]::after { content:'✓'; font-size:18px; align-self:flex-end; }
    .toggle[aria-pressed="false"]::after { content:'○'; font-size:18px; align-self:flex-end; }
    .speech { border:1px solid #7e8da2; border-radius:10px; padding:12px; margin-top:16px; }
    .speech h3 { margin:0 0 10px; font-size:1.06rem; }
    .speech-actions { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
    .speech-actions button { min-height:44px; padding:8px; border:2px solid #294e87; border-radius:8px; color:#152c4b; background:#eaf2ff; font-size:.9rem; }
    .speech-actions button:disabled { opacity:.55; cursor:not-allowed; }
    .speech-actions button:not(:disabled):hover,.media-actions button:hover,.toggle:hover { border-color:#102c61; background:#dceaff; }
    .speech-actions button:focus-visible,.toggle:focus-visible,.media-actions button:focus-visible { outline:3px solid #b45d00; outline-offset:2px; }
    .speech-actions button { line-height:1.45; }
    #speech-status { display:block; margin-top:10px; line-height:1.5; }
    .speech-hint { margin:9px 0 0; font-size:.82rem; line-height:1.5; }
    .hearing { border:1px solid #7e8da2; border-radius:10px; padding:12px; margin-top:16px; }
    .hearing h3 { margin:0 0 12px; font-size:1.06rem; }
    .option { display:flex; gap:10px; align-items:center; padding:7px 0; min-height:44px; }
    .option input { width:22px; height:22px; flex-shrink:0; accent-color:#123f87; }
    .option input:focus-visible { outline:3px solid #d08400; outline-offset:3px; }
    .field { margin:10px 0; }
    .field label { display:block; }
    .media-actions { display:flex; flex-wrap:wrap; gap:8px; margin:10px 0; }
    .media-actions button,.media-actions a { display:inline-flex; align-items:center; justify-content:center; min-height:44px; padding:8px; border-radius:8px; border:2px solid #294e87; background:#eaf2ff; color:#152c4b; text-decoration:none; }
    .media-actions button:disabled { opacity:.55; }
    #media-list { padding-inline-start:25px; margin:8px 0; }
    #media-list li { margin-bottom:10px; }
    .transcript { white-space:pre-wrap; overflow:auto; max-height:160px; padding:10px; background:#f5f7fb; color:#172a46; border:1px solid #a4b4cb; line-height:1.6; }
    .help { font-size:.85rem; line-height:1.5; margin:8px 0; }
    #notice { position:fixed; bottom:88px; right:20px; max-width:min(420px,calc(100vw - 24px)); padding:12px; border:3px solid #172e5c; background:#fff; color:#11244a; box-shadow:0 4px 20px #0005; z-index:2147483644; display:none; }
    #notice button { min-height:44px; min-width:44px; background:#eaf2ff; border:2px solid #294e87; border-radius:8px; }
    #notice-title { font-weight:700; }
    #live-display { display:none; position:fixed; bottom:90px; left:50%; transform:translateX(-50%); max-width:min(720px,calc(100vw - 30px)); background:#050505; color:#fff; padding:12px 18px; border:2px solid #fff; border-radius:8px; text-align:center; font-size:20px; line-height:1.5; z-index:2147483643; pointer-events:none; white-space:pre-wrap; }
    #sign-modal { width:min(580px,calc(100vw - 24px)); }
    #sign-modal video { display:block; max-width:100%; width:100%; max-height:45vh; background:#000; }
    #reset { display:block; width:100%; min-height:44px; margin-top:16px; padding:10px; border:2px solid #183b77; border-radius:8px; color:#fff; background:#173f85; font-weight:700; }
    .note { line-height:1.55; font-size:.84rem; margin:15px 0 0; color:#394960; }
    #guide { display:none; position:fixed; left:0; width:100vw; height:38px; border-top:2px solid #f7cc25; border-bottom:2px solid #f7cc25; background:#f7cc252b; pointer-events:none; z-index:2147483644; }
    @media (max-width:480px) { .header { margin:-15px -15px 16px; padding:14px 15px; } dialog { inset:auto 6px 6px 6px; width:calc(100vw - 12px); max-height:calc(100dvh - 12px); } .wrap { padding:15px; } #launcher { right:12px; bottom:12px; } }
    #launcher { width:62px;height:62px;right:20px;bottom:20px;background:#124ea4;border:3px solid #fff;border-radius:18px;box-shadow:0 6px 20px #08162b66;display:flex;align-items:center;justify-content:center;gap:5px; }
    #launcher svg { width:34px;height:34px;flex:none;stroke-width:2.5; }
    #launcher:hover { background:#083775; }
    .launcher-label { display:none;font-weight:750;font-size:13px; }
    .group { margin:10px 0;border:1px solid #b4c5dd;border-radius:12px;overflow:hidden;background:#fff; }
    .group summary { cursor:pointer;padding:15px 14px;background:#edf3ff;color:#123665;font-size:1rem;font-weight:750;min-height:48px;list-style-position:inside; }
    .group summary:hover { background:#dfebff; }
    .group summary:focus-visible { outline:3px solid #aa5700;outline-offset:-3px; }
    .group-body { padding:14px; }
    .group-body > label:not(.option) { display:block;margin-top:10px; }
    .group-body > label:first-child { margin-top:0; }
    .group .speech,.group .hearing { padding:0;margin:0;border:none; }
    .group .speech h3,.group .hearing > h3:first-child { display:none; }
    .toggle { min-height:76px; }
    dialog { border:1px solid #a3b8d2;border-radius:18px;box-shadow:0 14px 48px #10284665; }
    :host([data-mode="sidebar"]) #launcher { top:36%;bottom:auto;border-radius:14px 0 0 14px;width:52px;height:86px;right:0; }
    :host([data-mode="sidebar"][data-side="left"]) #launcher { left:0;right:auto;border-radius:0 14px 14px 0; }
    :host([data-mode="sidebar"]) #launcher svg { width:30px;height:30px; }
    :host([data-mode="sidebar"]) dialog:not(#sign-modal) { top:0;bottom:0;right:0;left:auto;margin:0;width:min(390px,100vw);height:100dvh;max-height:100dvh;border-radius:16px 0 0 16px; }
    :host([data-mode="sidebar"][data-side="left"]) dialog:not(#sign-modal) { left:0;right:auto;border-radius:0 16px 16px 0; }
    :host([data-mode="sidebar"]) dialog:not(#sign-modal)[open] ~ #guide { pointer-events:none; }
    @media (max-width:600px) { :host([data-mode="sidebar"]) dialog:not(#sign-modal) { top:8px;bottom:8px;right:8px;left:8px;width:calc(100vw - 16px);height:auto;max-height:calc(100dvh - 16px);border-radius:16px; } :host([data-mode="sidebar"][data-side="left"]) dialog:not(#sign-modal){left:8px;right:8px;border-radius:16px;} }
    @media (prefers-reduced-motion:reduce) { *,*::before,*::after { animation:none!important; transition:none!important; } }
  `;
  shadow.append(style);
  const launcher = document.createElement('button'); launcher.id='launcher'; launcher.type='button'; launcher.setAttribute('aria-haspopup','dialog'); launcher.setAttribute('aria-expanded','false');
  launcher.innerHTML = '<svg aria-hidden="true" viewBox="0 0 32 32"><circle cx="16" cy="5.5" r="2.8" fill="currentColor" stroke="none"/><path d="M5 12.4c7.8 3.1 14.2 3.1 22 0M16 14.5v13M16 19l-7 9M16 19l7 9"/></svg><span class="launcher-label"></span>'; 
  const dialog=document.createElement('dialog'); dialog.setAttribute('aria-labelledby','avt-title');
  dialog.innerHTML = `<div class="wrap"><div class="header"><h2 id="avt-title"></h2><button id="close" class="close" type="button">×</button></div><details class="group" id="group-settings"><summary id="settings-group-label"></summary><div class="group-body"><label for="displayMode" id="displayMode-label"></label><select id="displayMode"><option value="floating"></option><option value="sidebar"></option></select><label for="sidebarSide" id="sidebarSide-label"></label><select id="sidebarSide"><option value="right"></option><option value="left"></option></select><label for="locale" id="locale-label"></label><select id="locale"><option value="auto"></option><option value="ar"></option><option value="en"></option></select></div></details><details class="group" id="group-vision" open><summary id="visual-group-label"></summary><div class="group-body"><fieldset><legend id="font-label"></legend><div class="fontcontrols"><button id="minus" type="button">−</button><output id="percentage" aria-live="polite"></output><button id="plus" type="button">+</button><button id="fontreset" type="button">↺</button></div></fieldset><div class="toggles"></div></div></details><details class="group" id="group-speech"><summary id="speech-group-label"></summary><div class="group-body"><section class="speech" aria-labelledby="speech-heading"><h3 id="speech-heading"></h3><div class="speech-actions"><button id="readpage" type="button"></button><button id="readselection" type="button"></button><button id="pause" type="button"></button><button id="stop" type="button"></button></div><output id="speech-status" role="status" aria-live="polite"></output><p id="speech-hint" class="speech-hint"></p></section></div></details><details class="group" id="group-hearing"><summary id="hearing-group-label"></summary><div class="group-body"><section class="hearing" aria-labelledby="hearing-heading"><h3 id="hearing-heading"></h3><label class="option"><input id="captions" type="checkbox"><span id="captions-label"></span></label><label class="option"><input id="visualAlerts" type="checkbox"><span id="visualAlerts-label"></span></label><label class="option"><input id="transcript" type="checkbox"><span id="transcript-label"></span></label><div class="field"><label for="captionLanguage" id="captionLanguage-label"></label><select id="captionLanguage"><option value="auto"></option><option value="ar"></option><option value="en"></option></select></div><div class="field"><label for="captionSize" id="captionSize-label"></label><select id="captionSize"><option value="small"></option><option value="medium"></option><option value="large"></option></select></div><div class="field"><label for="captionContrast" id="captionContrast-label"></label><select id="captionContrast"><option value="high"></option><option value="default"></option></select></div><h3 id="media-heading"></h3><div id="media-list" role="list"></div><div class="media-actions"><button id="sign-button" type="button"></button><a id="contact-button" target="_blank" rel="noopener noreferrer" hidden></a></div><p id="contact-status" class="help"></p><h3 id="live-heading"></h3><p id="live-status" class="help" role="status"></p><p id="hearing-note" class="help"></p></section></div></details><button id="reset" type="button"></button><p class="note" id="note"></p><span id="live" role="status" aria-live="polite" style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"></span></div>`;
  const guide=document.createElement('div'); guide.id='guide'; guide.setAttribute('aria-hidden','true');
  const notice=document.createElement('div'); notice.id='notice';notice.setAttribute('role','status');
  notice.innerHTML='<span id="notice-title"></span> <span id="notice-text"></span> <button id="notice-close" type="button"></button>';
  const liveDisplay=document.createElement('div'); liveDisplay.id='live-display'; liveDisplay.setAttribute('aria-live','polite');
  const signModal=document.createElement('dialog'); signModal.id='sign-modal';signModal.setAttribute('aria-label','Sign-language video');
  signModal.innerHTML='<div class="wrap"><div class="header"><strong id="sign-title"></strong><button type="button" id="sign-close" class="close">×</button></div><video id="sign-video" controls playsinline preload="none"></video></div>';
  shadow.append(launcher,dialog,guide,notice,liveDisplay,signModal);
  const q=id => shadow.getElementById(id);
  const featureNames=['contrast','grayscale','links','spacing','motion','guide'];
  const toggles=q('unused') || dialog.querySelector('.toggles');
  for (const name of featureNames) { const b=document.createElement('button'); b.type='button'; b.className='toggle'; b.dataset.feature=name; b.setAttribute('aria-pressed','false'); b.addEventListener('click',()=>{ settings[name]=!settings[name]; if(settings[name] && name==='contrast')settings.grayscale=false; if(settings[name] && name==='grayscale')settings.contrast=false; update(); }); toggles.append(b); }
  // Host-provided integration: dataset attributes or configure() options.
  let configuration={ contactUrl:script?.dataset.avtContactUrl || '', signVideoUrl:script?.dataset.avtSignUrl || '' };
  let latestLiveCaption=null;
  const hasAllowedUrl=(value)=>{try { const u=new URL(value,document.baseURI); return ['https:','http:','mailto:','sms:'].includes(u.protocol) ? u.href : null;}catch(_){return null;}};
  const safeVideoUrl=(value)=>{const url=hasAllowedUrl(value);return url && /^https?:/.test(url)?url:null;};
  const mediaLabel=(media,index)=>media.getAttribute('aria-label') || media.getAttribute('title') || (media.closest('figure')?.querySelector('figcaption')?.textContent || '').trim() || ((media.tagName==='VIDEO'?'Video ':'Audio ')+index);
  function textTrackLanguage(track){return String(track.language || track.getAttribute?.('srclang') || '').toLowerCase();}
  function syncCaptionTracks(){
    const wanted=settings.captionLanguage==='auto' ? (document.documentElement.lang||language()).slice(0,2).toLowerCase() : settings.captionLanguage;
    document.querySelectorAll('video').forEach(video=>{
      const tracks=Array.from(video.textTracks||[]).filter(track=>['captions','subtitles'].includes(track.kind));
      if(!tracks.length)return;
      const target=tracks.find(t=>textTrackLanguage(t).startsWith(wanted)) || tracks.find(t=>t.mode==='showing') || tracks[0];
      for(const track of tracks){try{track.mode=settings.captions && track===target ? 'showing':'disabled';}catch(_){}}
    });
  }
  function transcriptFor(media){
    const selector=media.getAttribute('data-avt-transcript');
    if(selector && /^[#.][\w-]+$/.test(selector)) {const element=document.querySelector(selector);if(element)return element.textContent.trim();}
    const tracks=Array.from(media.textTracks||[]).filter(t=>['captions','subtitles'].includes(t.kind));
    const wanted=settings.captionLanguage==='auto'?(document.documentElement.lang||language()).slice(0,2):settings.captionLanguage;
    const track=tracks.find(t=>textTrackLanguage(t).startsWith(wanted))||tracks[0];
    if(track){if(track.mode==='disabled')track.mode='hidden';const cues=track.cues;if(cues?.length)return Array.from(cues,c=>c.text).join('\n');}
    return '';
  }
  function renderMedia(){
    const list=q('media-list'); list.replaceChildren();
    const media=Array.from(document.querySelectorAll('video,audio')).filter(m=>!host.contains(m));
    if(!media.length){const p=document.createElement('p');p.textContent=tr('noneMedia');list.append(p);return;}
    media.forEach((item,index)=>{
      const section=document.createElement('div');section.setAttribute('role','listitem');
      const title=document.createElement('strong');title.textContent=mediaLabel(item,index+1);section.append(title);
      const actions=document.createElement('div');actions.className='media-actions';
      const focus=document.createElement('button');focus.type='button';focus.textContent=tr('openMedia');focus.addEventListener('click',()=>{close();item.scrollIntoView({block:'center',behavior:'instant'});if(!item.hasAttribute('tabindex'))item.tabIndex=0;item.focus();});actions.append(focus);
      const button=document.createElement('button');button.type='button';button.textContent=tr('transcriptButton');button.hidden=!settings.transcript;
      const content=document.createElement('div');content.className='transcript';content.hidden=true;content.tabIndex=0;
      button.addEventListener('click',()=>{
        content.hidden=!content.hidden;button.textContent=tr(content.hidden?'transcriptButton':'transcriptClose');button.setAttribute('aria-expanded',String(!content.hidden));
        if(!content.hidden){content.textContent=transcriptFor(item)||tr('noTranscript');content.focus();}
      });
      button.setAttribute('aria-expanded','false');actions.append(button);
      section.append(actions,content);list.append(section);
    });
  }
  function refreshHearing(){
    q('hearing-heading').textContent=tr('hearing');
    for(const key of ['captions','visualAlerts','transcript']){q(key).checked=settings[key];q(key+'-label').textContent=tr(key);}
    for(const key of ['captionLanguage','captionSize','captionContrast']){q(key+'-label').textContent=tr(key);q(key).value=settings[key];}
    for(const [key,map] of Object.entries({captionLanguage:{auto:'auto',ar:'arabic',en:'english'},captionSize:{small:'sizeSmall',medium:'sizeMedium',large:'sizeLarge'},captionContrast:{high:'contrastHigh',default:'contrastDefault'}})){
      for(const [val,label] of Object.entries(map)){q(key).querySelector(`option[value="${val}"]`).textContent=tr(label);}
    }
    q('media-heading').textContent=tr('media');q('live-heading').textContent=tr('live');
    q('live-status').textContent=latestLiveCaption?.text || tr('liveWaiting');
    q('hearing-note').textContent=tr('speechNote')+' '+tr('captionNotice');
    q('sign-button').textContent=tr('sign');q('sign-button').disabled=!safeVideoUrl(configuration.signVideoUrl);
    q('sign-title').textContent=tr('sign');q('sign-close').setAttribute('aria-label',tr('close'));
    const href=hasAllowedUrl(configuration.contactUrl);q('contact-button').hidden=!href;
    if(href)q('contact-button').href=href;
    q('contact-button').textContent=tr('contact');q('contact-status').textContent=href?'':tr('contactUnavailable');
    q('notice-title').textContent=tr('alertTitle');q('notice-close').textContent=tr('closeAlert');
    renderMedia();
  }
  for(const key of ['captions','visualAlerts','transcript'])q(key).addEventListener('change',e=>{settings[key]=e.target.checked;update();});
  for(const key of ['captionLanguage','captionSize','captionContrast'])q(key).addEventListener('change',e=>{settings[key]=e.target.value;update();});
  q('sign-button').addEventListener('click',()=>{const url=safeVideoUrl(configuration.signVideoUrl);if(!url)return;q('sign-video').src=url;signModal.showModal();q('sign-close').focus();});
  const closeSign=()=>{if(signModal.open)signModal.close();q('sign-video').pause();q('sign-video').removeAttribute('src');q('sign-video').load();};
  q('sign-close').addEventListener('click',closeSign);signModal.addEventListener('close',closeSign);
  q('notice-close').addEventListener('click',()=>{notice.style.display='none';});
  function notifyVisual(message){if(!settings.visualAlerts)return;const value=String(message||'').slice(0,500);if(!value)return;q('notice-text').textContent=value;notice.style.display='block';}
  function pushLiveCaption(text,lang){const value=String(text||'').slice(0,2000);latestLiveCaption={text:value,lang:lang||language()};liveDisplay.textContent=value;liveDisplay.lang=latestLiveCaption.lang;liveDisplay.dir=/^ar/i.test(latestLiveCaption.lang)?'rtl':'ltr';liveDisplay.style.display=value && settings.captions?'block':'none';q('live-status').textContent=value||tr('liveWaiting');}
  const globalStyle=document.createElement('style'); globalStyle.id='avt-page-styles';
  // Effects are opt-in. They assist user preferences; they cannot repair inaccessible markup.
  document.head.append(globalStyle);
  let guideY=120;
  const speechSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  let speechState='speechIdle', speechQueue=[], speechIndex=0, speechToken=0;
  const synth = speechSupported ? window.speechSynthesis : null;
  let selectedSnapshot = null;
  // Capture selections while they are still present in the host document. Modal
  // focus, a toolbar click, or collapsed browser selection must not erase them.
  // Also handle selection within native input/textarea controls, which is not
  // returned by window.getSelection().
  function captureSelection(){
    const active=document.activeElement;
    if(active && !host.contains(active) && active.matches?.('textarea,input:not([type]),input[type=search],input[type=text],input[type=url],input[type=email],input[type=tel]')){
      const start=active.selectionStart, end=active.selectionEnd;
      if(Number.isInteger(start) && Number.isInteger(end) && end>start){
        const text=active.value.slice(start,end).trim();
        if(text){selectedSnapshot={text,node:active};return;}
      }
    }
    const sel=window.getSelection();
    if(!sel || sel.isCollapsed || !sel.toString().trim() || host.contains(sel.anchorNode) || host.contains(sel.focusNode))return;
    selectedSnapshot={text:sel.toString().trim(),node:sel.anchorNode};
  }
  document.addEventListener('selectionchange',captureSelection);
  document.addEventListener('pointerup',captureSelection);
  document.addEventListener('keyup',captureSelection);
  document.addEventListener('focusout',captureSelection,true);
  function nearestLanguage(node){
    const element=(node && node.nodeType===1 ? node : node?.parentElement);
    const marked=element?.closest?.('[lang]');
    return (marked?.lang || document.documentElement.lang || language()).toLowerCase().startsWith('ar') ? 'ar' : 'en';
  }
  function readableBlocks(){
    const root=document.querySelector('main') || document.querySelector('article') || document.body;
    const blocks=[];
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
      acceptNode(node){
        const el=node.parentElement;
        if(!el || !node.nodeValue.trim() || el.closest('#accessible-visitor-toolkit,script,style,noscript,template,svg,nav,footer,header,[hidden],[aria-hidden="true"],button,select,textarea,input,[role="button"]')) return NodeFilter.FILTER_REJECT;
        const cs=window.getComputedStyle(el);
        if(cs.display==='none' || cs.visibility==='hidden') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while((node=walker.nextNode())) {
      const value=node.nodeValue.trim().replace(/\s+/g,' ');
      if(value) blocks.push({text:value,lang:nearestLanguage(node)});
    }
    return blocks;
  }
  function chunkSpeech(blocks){
    const chunks=[];
    for(const block of blocks){
      const words=block.text.match(/\S+\s*/g) || [];
      let chunk='';
      for(const word of words){
        if(chunk && chunk.length + word.length > 190){chunks.push({text:chunk.trim(),lang:block.lang});chunk='';}
        chunk+=word;
      }
      if(chunk.trim())chunks.push({text:chunk.trim(),lang:block.lang});
    }
    return chunks;
  }
  function announceSpeech(state){speechState=state;refreshSpeech();}
  function refreshSpeech(){
    for(const [id,key] of [['readpage','readPage'],['readselection','readSelection'],['stop','stop']]) q(id).textContent=tr(key);
    q('pause').textContent=tr(speechState==='speechPaused'?'resume':'pause');
    q('speech-heading').textContent=tr('speech');
    q('speech-hint').textContent=tr('speechHint');
    q('speech-status').textContent=tr(speechSupported?speechState:'speechUnsupported');
    q('readpage').disabled=q('readselection').disabled=!speechSupported;
    q('pause').disabled=!speechSupported || !['speechPlaying','speechPaused'].includes(speechState);
    q('stop').disabled=!speechSupported || !['speechPlaying','speechPaused'].includes(speechState);
  }
  function stopSpeech(){
    speechToken++;speechQueue=[];speechIndex=0;
    if(speechSupported)synth.cancel();
    announceSpeech('speechIdle');
  }
  function nextSpeech(token){
    if(token!==speechToken)return;
    if(speechIndex >= speechQueue.length){announceSpeech('speechIdle');return;}
    const {text,lang}=speechQueue[speechIndex++];
    const u=new SpeechSynthesisUtterance(text);
    const voices=synth.getVoices();
    const chosen=voices.find(v=>v.lang.toLowerCase().startsWith(lang) && v.localService) || voices.find(v=>v.lang.toLowerCase().startsWith(lang));
    if(chosen)u.voice=chosen;
    u.lang=chosen?.lang || (lang==='ar'?'ar-SA':'en-US');
    u.rate=0.9;
    u.onend=()=>nextSpeech(token);
    u.onerror=e=>{
      if(token!==speechToken || e.error==='canceled' || e.error==='interrupted')return;
      speechToken++;speechQueue=[];announceSpeech('speechError');
    };
    synth.speak(u);
  }
  function startSpeech(blocks){
    if(!speechSupported){announceSpeech('speechUnsupported');return;}
    stopSpeech();speechQueue=chunkSpeech(blocks);
    if(!speechQueue.length){announceSpeech('speechEmpty');return;}
    const token=speechToken;
    announceSpeech('speechPlaying');nextSpeech(token);
  }
  q('readpage').addEventListener('click',()=>startSpeech(readableBlocks()));
  q('readselection').addEventListener('click',()=>{
    captureSelection();
    const selection=selectedSnapshot;
    if(!selection?.text){announceSpeech('speechSelect');return;}
    startSpeech([{text:selection.text,lang:nearestLanguage(selection.node)}]);
  });
  q('pause').addEventListener('click',()=>{
    if(!speechSupported)return;
    if(speechState==='speechPlaying'){synth.pause();announceSpeech('speechPaused');}
    else if(speechState==='speechPaused'){synth.resume();announceSpeech('speechPlaying');}
  });
  q('stop').addEventListener('click',stopSpeech);
  window.addEventListener('pagehide',stopSpeech);
  function refreshLabels(){
    const l=language(); dialog.lang=l; dialog.dir=l==='ar'?'rtl':'ltr';
    launcher.setAttribute('aria-label',settings.displayMode==='sidebar'?tr('toggleSidebar'):tr('open')); q('settings-group-label').textContent=tr('settingsGroup'); q('visual-group-label').textContent=tr('visualGroup'); q('speech-group-label').textContent=tr('speechGroup'); q('hearing-group-label').textContent=tr('hearingGroup'); q('displayMode-label').textContent=tr('displayMode'); q('sidebarSide-label').textContent=tr('sidebarSide'); for(const [key,values] of [['displayMode',{floating:'floating',sidebar:'sidebar'}],['sidebarSide',{left:'left',right:'right'}]]) { q(key).value=settings[key];for(const [value,label] of Object.entries(values)) q(key).querySelector(`option[value="${value}"]`).textContent=tr(label); } q('sidebarSide').disabled=settings.displayMode!=='sidebar'; q('avt-title').textContent=tr('title'); q('close').setAttribute('aria-label',tr('close'));
    q('locale-label').textContent=tr('language');
    for(const [v,k] of [['auto','auto'],['ar','arabic'],['en','english']]) q('locale').querySelector(`option[value="${v}"]`).textContent=tr(k);
    q('locale').value=settings.language; q('font-label').textContent=tr('font');
    q('minus').setAttribute('aria-label',tr('decrease')); q('plus').setAttribute('aria-label',tr('increase')); q('fontreset').setAttribute('aria-label',tr('resetFont'));
    q('percentage').textContent=settings.fontSize+'%'; q('percentage').setAttribute('aria-label',tr('percent')+': '+settings.fontSize+'%');
    q('minus').disabled=settings.fontSize<=100; q('plus').disabled=settings.fontSize>=200;
    for(const b of toggles.children) { const key=b.dataset.feature; b.textContent=tr(key); b.setAttribute('aria-pressed',String(settings[key])); }
    q('reset').textContent=tr('reset'); q('note').textContent=tr('note'); refreshSpeech();refreshHearing();
  }
  function update(){
    const parts=[];
    if(settings.fontSize!==100) parts.push(`html { font-size:${settings.fontSize}% !important; }`);
    if(settings.links) parts.push('body a:not([role="button"]) { text-decoration:underline!important; text-decoration-thickness:2px!important; text-underline-offset:3px!important; outline-offset:3px!important; }');
    if(settings.spacing) parts.push('body { line-height:1.6!important; letter-spacing:.08em!important; word-spacing:.16em!important; } body p, body li { line-height:1.8!important; }');
    if(settings.motion) parts.push('body *,body *::before,body *::after { animation-duration:.01ms!important; animation-iteration-count:1!important; transition-duration:.01ms!important; scroll-behavior:auto!important; }');
    // Filter only page content, never the widget's host. A filter on body/html creates
    // a containing block for position:fixed UI and also desaturates our controls.
    // Exclude native dialogs as well: modal elements belong to the top layer.
    if(settings.grayscale) parts.push(`
      body > :not(#accessible-visitor-toolkit):not(script):not(style):not(dialog) { filter:grayscale(1)!important; }
      body > dialog:not(#accessible-visitor-toolkit) { filter:grayscale(1)!important; }
    `);
    if(settings.contrast) parts.push(`
      html, body { background-color:#000!important; color:#fff!important; }
      body :where(:not(#accessible-visitor-toolkit):not(script):not(style):not(link):not(meta)) {
        background-color:#000!important; background-image:none!important;
        color:#fff!important; border-color:#fff!important;
        text-shadow:none!important; box-shadow:none!important;
      }
      body :is(a, a *, [role="link"], [role="link"] *) { color:#ffff00!important; text-decoration:underline!important; }
      body :is(button,input,select,textarea,[role="button"],[role="checkbox"],[role="switch"]) {
        background-color:#000!important; color:#fff!important; border:2px solid #fff!important;
      }
      body :is(button,[role="button"],[role="checkbox"],[role="switch"]):focus-visible,
      body :is(a,input,select,textarea,[tabindex]):focus-visible {
        outline:3px solid #ffff00!important; outline-offset:3px!important;
      }
      body ::placeholder { color:#ddd!important; opacity:1!important; }
    `);
    const cueColor=settings.captionContrast==='high'?'#fff':'inherit';
    const cueBackground=settings.captionContrast==='high'?'#000':'transparent';
    const cueFont=settings.captionSize==='large'?'1.5em':settings.captionSize==='small'?'0.85em':'1.1em';
    parts.push(`video::cue { color:${cueColor}!important; background:${cueBackground}!important; font-size:${cueFont}!important; }`);
    globalStyle.textContent=parts.join('\n');
    liveDisplay.style.fontSize=settings.captionSize==='large'?'26px':settings.captionSize==='small'?'16px':'20px';
    liveDisplay.style.background=settings.captionContrast==='high'?'#000':'#333';
    liveDisplay.style.display=settings.captions && latestLiveCaption?.text?'block':'none';
    if(!settings.visualAlerts)notice.style.display='none';
    syncCaptionTracks(); guide.style.display=settings.guide?'block':'none'; guide.style.top=guideY+'px';
    host.dataset.mode=settings.displayMode; host.dataset.side=settings.sidebarSide;
    refreshLabels(); try { localStorage.setItem(STORAGE,JSON.stringify(settings)); } catch (_) {}
    q('live').textContent=tr('status');
  }
  function close(){ if(dialog.open) dialog.close(); }
  function open(){ if(!dialog.open) { if(settings.displayMode==='sidebar' && window.matchMedia('(min-width: 601px)').matches) dialog.show(); else dialog.showModal(); launcher.setAttribute('aria-expanded','true'); q('close').focus(); } }
  function setMode(value){if(!['floating','sidebar'].includes(value))return;const wasOpen=dialog.open;if(wasOpen)close();settings.displayMode=value;update();if(wasOpen)open();}
  function setSide(value){if(!['left','right'].includes(value))return;settings.sidebarSide=value;update();}
  launcher.addEventListener('click',open);
  q('close').addEventListener('click',close);
  dialog.addEventListener('close',()=>{ launcher.setAttribute('aria-expanded','false'); launcher.focus(); });
  q('displayMode').addEventListener('change',e=>setMode(e.target.value));
  q('sidebarSide').addEventListener('change',e=>setSide(e.target.value));
  q('locale').addEventListener('change',e=>{settings.language=e.target.value;update();});
  q('minus').addEventListener('click',()=>{settings.fontSize=Math.max(100,settings.fontSize-10);update();});
  q('plus').addEventListener('click',()=>{settings.fontSize=Math.min(200,settings.fontSize+10);update();});
  q('fontreset').addEventListener('click',()=>{settings.fontSize=100;update();});
  q('reset').addEventListener('click',()=>{stopSpeech();settings={...defaults};update();});
  document.addEventListener('pointermove',e=>{if(settings.guide){guideY=Math.max(0,Math.min(window.innerHeight-38,e.clientY-19));guide.style.top=guideY+'px';}},{passive:true});
  document.body.append(host); update();
  if(settings.displayMode==='sidebar' && window.matchMedia('(min-width: 601px)').matches) open();
  document.addEventListener('avt:visual-alert',e=>notifyVisual(e.detail?.message));
  document.addEventListener('avt:live-caption',e=>pushLiveCaption(e.detail?.text,e.detail?.lang));
  // Synchronize freshly added HTML media (e.g., single-page apps) when opening settings.
  dialog.addEventListener('close',()=>{syncCaptionTracks();});
  window.AccessibleVisitorToolkit={version:'1.7.0',open,close,setMode,setSide,reset:()=>{stopSpeech();settings={...defaults};update();},readPage:()=>startSpeech(readableBlocks()),stopReading:stopSpeech,notifyVisual,pushLiveCaption,configure:(options={})=>{for(const k of ['contactUrl','signVideoUrl'])if(typeof options[k]==='string')configuration[k]=options[k];refreshHearing();},refreshMedia:()=>{syncCaptionTracks();renderMedia();},getSettings:()=>({...settings})};
  // Public Able alias; preserve the original API for existing installations.
  window.AbleWidget = window.AccessibleVisitorToolkit;
})();