import React from 'react';
import { Table } from 'react-bootstrap';
import './ConfSessions.css';
import Logo from './conf_logo.png';

export default function Sessions() {

  return (
    <>
      <div className='container text-center'>
        <header className='jumbotron'>
          <h2>ATS 2022 Conference Sessions</h2>
          <img
          className='conference-image'
            alt='ATS Conference Logo'
            src={Logo}
            width='1200'
            height='160'
          />
        </header>
      </div>

      <Table striped bordered hover size='lg' className='sess-table'>
        <thead>
          <tr>
          <td></td>
            <td colSpan={1} className='day-header text-center'> <strong>Friday, May 13</strong></td>
          </tr>
        </thead>

        <tbody className='text-center'>
          <tr>
            <td className='time'>8:00am - 4:00pm</td>
            <td className='sess-desc'>Postgraduate Courses</td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered hover size='lg' className='sess-table'>
        <thead>
          <tr>
          <td></td>
            <td colSpan={1} className='day-header text-center'> <strong>Saturday, May 14</strong></td>
          </tr>
        </thead>

        <tbody className='text-center'>
          <tr>
          <td className='time'>8:00am - 4:00pm</td>
            <td className='sess-desc'>Postgraduate Courses</td>
          </tr>

          <tr>
            <td className='time'>4:30pm - 5:30pm</td>
            <td className='sess-desc'>Opening Ceremony</td>
          </tr>

          <tr>
            <td className='time'>5:30pm - 6:30pm</td>
            <td className='sess-desc'>Networking Exchange for Early Career Professionals</td>
          </tr>

          <tr>
            <td className='time'>6:00pm - 7:30pm</td>
            <td className='sess-desc'>Annual ATS Research Program Benefit</td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered hover size='lg' className='sess-table'>
        <thead>
          <tr>
            <td></td>
            <td colSpan={1} className='day-header text-center'> <strong>Sunday, May 15</strong></td>
          </tr>
        </thead>

        <tbody className='text-center'>
          <tr>
            <td className='time'>7:00am - 8:00am</td>
            <td className='sess-desc'>Meet the Expert Seminars</td>
          </tr>

          <tr>
            <td className='time'>8:15am - 9:00am</td>
            <td className='sess-desc'>Keynote Series</td>
          </tr>

          <tr>
            <td className='time align-middle'>9:30am - 11:00am</td>
            <td className='sess-desc'>
              Basic Science Core<br />
              Clinical Topics in Pulmonary Medicine<br />
              Clinical Year in Review<br />
              Critical Care Track<br />
              Mini Symposia<br />
              Poster Discussion Sessions<br />
              RAPiD: Rapid Abstract Poster Discussion Sessions<br />
              Scientific Symposia
            </td>
          </tr>

          <tr>
            <td className='time'>9:30am - 3:00pm</td>
            <td className='sess-desc'>Thematic Poster Sessions</td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered hover size='lg' className='sess-table'>
        <thead>
          <tr>
            <td></td>
            <td colSpan={1} className='day-header text-center'> <strong>Monday, May 16</strong></td>
          </tr>
        </thead>

        <tbody className='text-center'>
          <tr>
            <td className='time'>7:00am - 8:00am</td>
            <td className='sess-desc'>Meet the Expert Seminars</td>
          </tr>

          <tr>
            <td className='time'>8:15am - 9:00am</td>
            <td className='sess-desc'>Keynote Series</td>
          </tr>

          <tr>
            <td className='time align-middle'>9:30am - 11:00am</td>
            <td className='sess-desc'>
              Basic Science Core<br />
              Clinical Topics in Pulmonary Medicine<br />
              Clinical Year in Review<br />
              Critical Care Track<br />
              Mini Symposia<br />
              Poster Discussion Sessions<br />
              RAPiD: Rapid Abstract Poster Discussion Sessions<br />
              Scientific Symposia
            </td>
          </tr>

          <tr>
            <td className='time'>9:30am - 3:00pm</td>
            <td className='sess-desc'>Thematic Poster Sessions</td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered hover size='lg' className='sess-table'>
        <thead>
          <tr>
            <td></td>
            <td colSpan={1} className='day-header text-center'> <strong>Tuesday, May 17</strong></td>
          </tr>
        </thead>

        <tbody className='text-center'>
          <tr>
            <td className='time'>7:00am - 8:00am</td>
            <td className='sess-desc'>Meet the Expert Seminars</td>
          </tr>

          <tr>
            <td className='time'>8:15am - 9:00am</td>
            <td className='sess-desc'>Keynote Series</td>
          </tr>

          <tr>
            <td className='time align-middle'>9:30am - 11:00am</td>
            <td className='sess-desc'>
              Basic Science Core<br />
              Clinical Topics in Pulmonary Medicine<br />
              Clinical Year in Review<br />
              Critical Care Track<br />
              Mini Symposia<br />
              Poster Discussion Sessions<br />
              RAPiD: Rapid Abstract Poster Discussion Sessions<br />
              Scientific Symposia
            </td>
          </tr>

          <tr>
            <td className='time'>9:30am - 3:00pm</td>
            <td className='sess-desc'>Thematic Poster Sessions</td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered hover size='lg' className='sess-table'>
        <thead>
          <tr>
            <td></td>
            <td colSpan={1} className='day-header text-center'> <strong>Wednesday, May 18</strong></td>
          </tr>
        </thead>

        <tbody className='text-center'>
          <tr>
            <td className='time'>7:00am - 8:00am</td>
            <td className='sess-desc'>Meet the Expert Seminars</td>
          </tr>

          <tr>
            <td className='time'>8:15am - 9:00am</td>
            <td className='sess-desc'>Keynote Series</td>
          </tr>

          <tr>
            <td className='time align-middle'>9:30am - 11:00am</td>
            <td className='sess-desc'>
              Basic Science Core<br />
              Clinical Topics in Pulmonary Medicine<br />
              Clinical Year in Review<br />
              Critical Care Track<br />
              Mini Symposia<br />
              Poster Discussion Sessions<br />
              RAPiD: Rapid Abstract Poster Discussion Sessions<br />
              Scientific Symposia
            </td>
          </tr>

          <tr>
            <td className='time'>9:30am - 3:00pm</td>
            <td className='sess-desc'>Thematic Poster Sessions</td>
          </tr>
        </tbody>
      </Table>

    </>
  )
}


