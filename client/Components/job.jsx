
import React from 'react'
import { Table } from 'semantic-ui-react'

const job = (props) => {
    const jobs = props.jobs
    const jobList =jobs.map((job)=>
    <Table.Row>
        <Table.Cell>
        </Table.Cell>
        <Table.Cell singleLine>{job.qty}</Table.Cell>
        <Table.Cell>
        {job.project_description}
        </Table.Cell>
      </Table.Row>
    )


}

export default job