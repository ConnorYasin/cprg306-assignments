import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Connor Yasinski</h1>
      <p>
        <Link href="https://github.com/ConnorYasin/cprg306-assignments">
            GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;