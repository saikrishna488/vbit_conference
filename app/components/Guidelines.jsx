import React from 'react';

const Guidelines = () => {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl font-bold mb-4">Instructions for Presentation of Papers</h1>
      <h2 className="text-xl font-bold mb-2">Oral Presentation Guidelines</h2>
      <p className="mb-4">
        The oral presentation for the conference has been allocated 10 minutes of effective presenting
        time, plus 2 minutes for Q/A and a 1-minute turnaround time between presenters. Authors
        should prepare oral presentations to effectively deliver their message, including an outline
        of key principles, facts, and outcomes.
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>Arrive 15 minutes before the session starts and introduce yourself to the session chairs.</li>
        <li>
          All conference rooms will be equipped with a video projector and a PC. Authors are not permitted
          to use their laptops which eliminates unnecessary time breaks between papers.
        </li>
        <li>
          Bring your presentation on a USB memory stick in MS PowerPoint format and upload it to the Session
          Room computer 15 minutes before the session starts. You can also bring it earlier, during
          coffee/lunch breaks on any of the days before your presentation. A volunteer will assist you with
          uploading and organizing your presentation materials.
        </li>
      </ul>
      <h2 className="text-xl font-bold mb-2">PowerPoint Instructions</h2>
      <p className="mb-4">
        For MS PowerPoint presentations, please use the following versions only: PP 97-2003 (*.ppt) or 2007,
        2010 to guarantee that it will be opened successfully on the on-site PC. We recommend the PPT/PPTX
        format instead of PPS. All videos or animations in the presentation must run automatically!
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>We cannot support embedded videos in your presentation; please test it with the on-site PC several hours before the presentation. In general, the WMV format should work without difficulty.</li>
        <li>In case your video is not inserted in MS PowerPoint, it is possible to have it in other formats – MPEG 2,4, AVI (codecs: DivX, XviD, h264) or WMV. The suggested bitrate for all mpeg4-based codecs is about 1 Mbps with SD PAL resolution (1024x576pix with square pixels, AR: 16/9).</li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Fonts</h2>
      <p className="mb-4">
        Only fonts that are included in the basic installation of MS Windows will be available (English version
        of Windows). Use of other fonts not included in Windows can cause the wrong layout/style of your
        presentation. Suggested fonts: Arial, Times New Roman.
      </p>
    </div>
  );
};

export default Guidelines;
