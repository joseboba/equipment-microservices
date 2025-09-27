import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { UserAppDto } from './dtos/user-app.dto';
import { catchError, firstValueFrom, map } from 'rxjs';
import { AxiosError } from 'axios';
import { AdapterErrorValidation, Response } from 'incident-management-commons';

@Injectable()
export class GetUserAppByIdAdapterService {
  constructor(
    private readonly _configService: ConfigService,
    private readonly _httpService: HttpService,
  ) {}

  async execute(userId: number): Promise<UserAppDto> {
    const url = this.buildReqUrl(userId);

    return firstValueFrom(
      this._httpService.get<Response<UserAppDto>>(url).pipe(
        map((res) => res.data.data),
        catchError((error: AxiosError) => {
          throw new AdapterErrorValidation().execute(error);
        }),
      ),
    );
  }

  private buildReqUrl(userId: number) {
    const { baseUrl, resourcePath } = this._configService.get(
      'user.getUserAppByUserAppId',
    );
    return `${baseUrl}/${resourcePath}/by-id/${userId}`;
  }
}
