<img width="800" height="400" alt="517d50010dfe6e71d17548cae0f6f0dc" src="https://github.com/user-attachments/assets/ae91324d-dc52-4069-8428-299e8fccb661" />

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 200" width="900" height="200" role="img">
  <title>Shiloh bilingual typewriter</title>
  <desc>Infinite typewriter animation alternating between Spanish and English greeting</desc>
 
  <rect width="900" height="200" fill="#000000"/>
 
  <style>
    .txt {
      font-family: 'Georgia', serif;
      font-size: 42px;
      fill: #ffffff;
      dominant-baseline: middle;
    }
    .cursor {
      font-family: 'Georgia', serif;
      font-size: 42px;
      fill: #ffffff;
      dominant-baseline: middle;
    }
 
    /* Each character clips in one by one, then erases in reverse */
    /* Line 1: ¡Hola, yo soy Shiloh! = 22 chars */
    /* Line 2: Hello, I am Shiloh!   = 19 chars */
 
    /* Timing constants (all in seconds):
       type_speed  = 0.08s per char
       hold        = 2s
       erase_speed = 0.06s per char
 
       Line 1 type:  22 * 0.08 = 1.76s
       Line 1 hold:  2s
       Line 1 erase: 22 * 0.06 = 1.32s
       Gap:          0.2s
       Line 2 type:  19 * 0.08 = 1.52s
       Line 2 hold:  2s
       Line 2 erase: 19 * 0.06 = 1.14s
       Gap:          0.2s
       Total cycle:  ~10.16s  → round to 10.2s
    */
 
    /* We simulate typewriter by animating the width of a clipRect over each char group */
 
    /* === LINE 1 VISIBILITY === */
    /* Line 1 is visible from 0 → (1.76 + 2 + 1.32) = 5.08s, then hidden until next cycle */
    #line1-group {
      animation: line1-vis 10.2s linear infinite;
    }
    @keyframes line1-vis {
      0%        { opacity: 1; }
      49.8%     { opacity: 1; }
      49.81%    { opacity: 0; }
      100%      { opacity: 0; }
    }
 
    /* === LINE 2 VISIBILITY === */
    /* Line 2 appears at 5.28s, disappears at 5.28+1.52+2+1.14 = 9.94s */
    #line2-group {
      animation: line2-vis 10.2s linear infinite;
    }
    @keyframes line2-vis {
      0%        { opacity: 0; }
      51.76%    { opacity: 0; }
      51.77%    { opacity: 1; }
      97.45%    { opacity: 1; }
      97.46%    { opacity: 0; }
      100%      { opacity: 0; }
    }
 
    /* Clip width animations — typewriter effect via clipPath rect width */
 
    /* Line 1 clip: 0→1.76s type out (width 0→660), hold, 5.08s erase (width 660→0) */
    #clip1-rect {
      animation: clip1 10.2s linear infinite;
    }
    @keyframes clip1 {
      0%      { width: 0; }
      17.25%  { width: 660px; }
      49.8%   { width: 660px; }
      62.75%  { width: 0; }
      100%    { width: 0; }
    }
 
    /* Line 2 clip: appears at 51.76%, types until 51.76+14.9=66.66%, holds, erases */
    #clip2-rect {
      animation: clip2 10.2s linear infinite;
    }
    @keyframes clip2 {
      0%      { width: 0; }
      51.76%  { width: 0; }
      66.47%  { width: 570px; }
      97.45%  { width: 570px; }
      100%    { width: 0; }
    }
 
    /* Cursor blink */
    .cursor-blink {
      animation: blink 0.6s step-end infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50%      { opacity: 0; }
    }
 
    /* Cursor follows end of typed text for line1 */
    #cur1 {
      animation: cur1-move 10.2s linear infinite, cur1-vis 10.2s linear infinite, blink 0.6s step-end infinite;
    }
    @keyframes cur1-move {
      0%      { transform: translateX(0px); }
      17.25%  { transform: translateX(520px); }
      49.8%   { transform: translateX(520px); }
      62.75%  { transform: translateX(0px); }
      100%    { transform: translateX(0px); }
    }
    @keyframes cur1-vis {
      0%      { opacity: 1; }
      49.8%   { opacity: 1; }
      49.81%  { opacity: 0; }
      100%    { opacity: 0; }
    }
 
    #cur2 {
      animation: cur2-move 10.2s linear infinite, cur2-vis 10.2s linear infinite, blink 0.6s step-end infinite;
    }
    @keyframes cur2-move {
      0%      { transform: translateX(0px); }
      51.76%  { transform: translateX(0px); }
      66.47%  { transform: translateX(452px); }
      97.45%  { transform: translateX(452px); }
      100%    { transform: translateX(0px); }
    }
    @keyframes cur2-vis {
      0%      { opacity: 0; }
      51.76%  { opacity: 0; }
      51.77%  { opacity: 1; }
      97.45%  { opacity: 1; }
      97.46%  { opacity: 0; }
      100%    { opacity: 0; }
    }
  </style>
 
  <defs>
    <clipPath id="clip1">
      <rect id="clip1-rect" x="0" y="0" width="0" height="200"/>
    </clipPath>
    <clipPath id="clip2">
      <rect id="clip2-rect" x="0" y="0" width="0" height="200"/>
    </clipPath>
  </defs>
 
  <!-- Line 1 -->
  <g id="line1-group">
    <g clip-path="url(#clip1)">
      <text class="txt" x="190" y="100">&#xA1;Hola, yo soy Shiloh!</text>
    </g>
    <!-- cursor for line 1 -->
    <text id="cur1" class="cursor" x="190" y="100">|</text>
  </g>
 
  <!-- Line 2 -->
  <g id="line2-group">
    <g clip-path="url(#clip2)">
      <text class="txt" x="215" y="100">Hello, I am Shiloh!</text>
    </g>
    <!-- cursor for line 2 -->
    <text id="cur2" class="cursor" x="215" y="100">|</text>
  </g>
 
</svg>
